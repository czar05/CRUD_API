const express = require("express");
const app = express();
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