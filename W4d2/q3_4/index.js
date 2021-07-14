const express = require('express');
const path = require('path');
const session = require('express-session');

const shoppingcart = require('./shoping-cart');
const product = require('./product');

const app = express();
app.use(session({ secret: 'VerySecret' }));
app.use(express.urlencoded());

app.use((req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = {};
    };

    next();
});


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));

app.use(product);

app.use(shoppingcart);


app.listen(3000);