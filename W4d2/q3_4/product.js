const express = require('express');

const router = express.Router();



router.get('/apples', (req, res, next) => {
    let product = {
        id: 1,
        name: "apple",
        description: "very sweet",
        price: 800
    };

    res.render('product', { product });
});
router.get('/orage', (req, res, next) => {
    let product = {
        id: 2,
        name: "orange",
        description: "sweet and sour",
        price: 200
    };
    res.render('product', { product });
});

router.get('/grapes', (req, res, next) => {
    let product = {
        id: 3,
        name: "grapes",
        description: "red and sweet",
        price: 500
    };

    res.render('product', { product });
});

module.exports = router;