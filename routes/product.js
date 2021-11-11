const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

const passport = require('passport');

router.get('/', passport.authenticate('jwt', { session: false }), productController.getProducts);
router.post('/', passport.authenticate('jwt', { session: false }), productController.createProducts);
router.delete('/:id', passport.authenticate('jwt', { session: false }), productController.deleteProducts);
router.patch('/:id', passport.authenticate('jwt', { session: false }), productController.updateProducts);
module.exports = router;

