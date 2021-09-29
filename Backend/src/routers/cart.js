const express = require("express");
const router = new express.Router();

const CartStore = require('../models/cart');

router.post("/products/addToCart", async(req,res) => {
    console.log("req.body", typeof req, req.body);
    try {
        const addProductsToCart = new CartStore(req.body);
        console.log('1',req.body);
        let insertProductsToCart = await addProductsToCart.save();
        res.status(201).send(insertProductsToCart);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/cart", async(req,res) => {
    try {
        const getProductsFromCart = await CartStore.find({});
        console.log('getProducts from cart', getProductsFromCart);
        // res.json({products: getProducts});
        res.json(getProductsFromCart);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;