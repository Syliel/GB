if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const productRoutes = require('./routes/products');
const baseURL = require('./utils/baseRoute')
const Product = require('./models/products');
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/GB';


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(dbUrl, {
    });
};

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(`${baseURL}`, express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(`${baseURL}products`, productRoutes);

app.get(baseURL, async (req, res) => {
    const dairy = await Product.find({ 'details.category': 'dairy' }).limit(6).exec();
    const produce = await Product.find({ 'details.category': 'produce' }).limit(6).exec();
    const bakery = await Product.find({ 'details.category': 'bakery' }).limit(6).exec();
    res.render('products/home', { dairy, produce, bakery })
});

app.listen(3000, () => {
    console.log("Listening on port 3000")
});