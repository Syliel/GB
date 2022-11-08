const express = require('express');
const router = express.Router();
const products = require('../controllers/products');

router.route('/')
    .get((products.index))

router.route('/produce')
    .get((products.showProduce))

router.route('/dairy')
    .get((products.showDairy))

router.route('/bakery')
    .get((products.showBakery))



router.route('/:id')
    .get((products.showProduct))



module.exports = router;