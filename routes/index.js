var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');

router.use(function (req, res, next) {
    res.locals.login = req.isAuthenticated();
    next();
});

router.get('/', function (req, res, next) {
    Product.find(function (err, docs) {
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks});
    });
});

router.get('/add-to-cart/:id', function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart.items : {});
    
    Product.findById(productId, function (err, product) {
        cart.add(product, product.id);
        req.session.cart = cart;
        res.redirect('/');
    });
});

router.get('/shopping-cart', function (req, res, next) {
    if (!req.session.cart) {
        return res.render('shop/shopping-cart', {products: null});
    }
    var cart = new Cart(req.session.cart.items);
    res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

module.exports = router;