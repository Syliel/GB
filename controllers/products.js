const Product = require('../models/products');

module.exports.index = async (req, res) => {
    const product = await Product.find({});
    res.render('products/index', { product }) //the curly brackets here acutally render the campgrounds to the page
}


module.exports.showProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render('products/show', { product });
}

module.exports.showProduce = async (req, res) => {
    const max_width = 4;
    const produce = await Product.find({ 'details.category': 'produce' }).exec();
    const num_columns = Math.ceil((produce.length) / max_width);
    res.render('products/produce', { produce, max_width, num_columns }) //the curly brackets here acutally render the campgrounds to the page
}

module.exports.showDairy = async (req, res) => {
    const max_width = 4;
    const dairy = await Product.find({ 'details.category': 'dairy' }).exec();
    const num_columns = Math.ceil((dairy.length) / max_width);
    res.render('products/dairy', { dairy, max_width, num_columns }) //the curly brackets here acutally render the campgrounds to the page
}

module.exports.showBakery = async (req, res) => {
    const max_width = 4;
    const bakery = await Product.find({ 'details.category': 'bakery' }).exec();
    const num_columns = Math.ceil((bakery.length) / max_width);
    console.log(bakery.length)
    console.log(num_columns)
    res.render('products/bakery', { bakery, max_width, num_columns }) //the curly brackets here acutally render the campgrounds to the page
}
