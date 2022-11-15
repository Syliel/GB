const express = require('express');
const router = express.Router();
const products = require('../controllers/products');


router.route('/')
    .get((products.index))

router.route('/category/:category')
    .get((products.showCategory));


router.route('/:id')
    .get((products.showProduct));

router.route('/:id/myCart')
    .get((products.addCart))



module.exports = router;