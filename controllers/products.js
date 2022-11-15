const Product = require('../models/products');
const Cart = require('../models/cart');

module.exports.index = async (req, res) => {
    const product = await Product.find({});
    res.render('products/index', { product })
}

module.exports.showProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render('products/show', { product });
}

module.exports.showCategory = async (req, res) => {
    const max_width = 4;
    const category = req.params.category
    const products = await Product.find({ 'details.category': category }).exec();
    if (products.length === 0) {
        console.log("Throw 404 here")
        res.status(404).send(`No category for ${category}`)
    }
    const num_columns = Math.ceil((products.length) / max_width);

    res.render('products/category', { products, max_width, num_columns })
}

module.exports.addCart = async (req, res) => {
    // const productId = req.params.id;
    // console.log(productId)
    // const cart = new Cart(req.session.cart ? req.session.cart : {});
    // const products = await Product.findById(productId)
    // cart.add(products, products.id);
    // req.session.cart = cart;
    // console.log(cart)
    // res.redirect('/');
    res.send("This is a response!")
}