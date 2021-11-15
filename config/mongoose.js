const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/todo_list_db');

const mongo_uri = process.env.MONGO_URI;
mongoose.connect(mongo_uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', function(){
    console.log('successfully connected to database');
});

module.exports = db;