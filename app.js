if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const MongoStore = require("connect-mongo");
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

const secret = process.env.SECRET || 'thisshouldbeabettersecret';

const sessionConfig = {
    store: MongoStore.create({
        mongoUrl: dbUrl,
        touchAfter: 24 * 60 * 60,
        crypto: {
            secret
        },
    }),
    name: 'jenni_session',
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        //cookies only accessible over http not javascript
        // httpOnly: true,
        // secure: true, will we set this when we deploy. rn it messes things up with https
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig))

app.use(`${baseURL}`, express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(`${baseURL}products`, productRoutes);

app.get(baseURL, async (req, res) => {
    const dairy = await Product.find({ 'details.category': 'dairy' }).limit(7).exec();
    const produce = await Product.find({ 'details.category': 'produce' }).limit(7).exec();
    const bakery = await Product.find({ 'details.category': 'bakery' }).limit(7).exec();
    res.render('products/home', { dairy, produce, bakery })
});

app.listen(3000, () => {
    console.log("Listening on port 3000")
});