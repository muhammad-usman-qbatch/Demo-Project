const express = require('express');
const Router = express.Router();

//const {addingToCart, gettingFromCart} = require('../controllers/store/cart');
console.log('store.js');
const AddingToCart = require('../controllers/store/cart/addToCart');
Router.post('/addToCart', (req, res) => {
    console.log('store123.js', req);

});
module.exports = Router;