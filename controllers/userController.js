const { findOne } = require('../models/userSchema');
const User = require('../models/userSchema');
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res)=> {
    try {
        const user = await User.create(req.body);

        return res.status(200).json({
            success: true,
            data: user.id
        })
    } catch (error) {
        return res.status(500).json({success : false, data: "server error"});
    }
}

module.exports.login = async (req, res)=> {
    try {
        const {email, password} = req.body ;
        
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({success:false, data:"user doesn't exist"});
        }

        if(user.password !== password){
            return res.status(400).json({success:false, data:"user password is incorrect "});
        }

        const token = await jwt.sign({
           name : user.name,
           id: user.id
        },"bcjbkdv");

        return res.status(200).json({
            success: true,
            data: {
                token,
            },
        })
    } catch (error) {
        return res.status(500).json({success : false, data: "server error"});
    }
}