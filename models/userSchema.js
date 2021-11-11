const mongoose = require('mongoose');



 const userSchema = new mongoose.Schema({
     name:{
         type : String,
         required : true
     },
     email: {
        type: String,
        required : true,
        unique: true 
    },
    password: {
        type: String,
        required: true,
        minlength:4
    },
    products: [
        {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Product"
        }
    ]
    

 });

 const User = mongoose.model('user',userSchema);

 module.exports = User;