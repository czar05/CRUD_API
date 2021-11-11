const express = require('express');
const router = express.Router();
const Product = require('../models/product');

 router.use('/product', require('./product'));
 router.use('/user', require('./user'));
module.exports = router;