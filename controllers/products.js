const Product = require('../models/products');

module.exports.index = async (req, res) => {
    const product = await Product.find({});
    res.render('products/index', { product }) //the curly brackets here acutally render the campgrounds to the page
}


module.exports.showProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render('products/show', { product });
}