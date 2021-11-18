const express = require("express");
const app = express();
const mongoose = require('mongoose');
const DB = 'mongodb+srv://czar05:aayushi%4005@cluster0.feyp0.mongodb.net/crud_api?retryWrites=true&w=majority';
mongoose.connect(DB , {
  useNewUrlParser : true,
  // useCreateIndex : true,
  useUnifiedTopology : true,
  // useFindAndModify : false
}).then(() => {
    console.log(`connection successful`);
}).catch((err) => {
  console.log(`no connection`);
});
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const db = require('./config/mongoose');
const Product = require('./models/product');
const passport = require('./config/passport_Jwt')
// const router = require("./routes/index");

app.use(passport.initialize());
app.use(express.json());

app.get('/',(req, res) => {
    res.send('this is your homepage');
  });

 app.use('/api', require('./routes/index'));



  app.listen(port, () => {
    console.log(`Your app is listening at http://localhost:${port}`)
  })