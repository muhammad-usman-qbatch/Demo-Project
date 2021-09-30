const express = require('express');
const CartStore = require('../../models/cart');
const ProductsStore = require('../../models/products');

const addToCart = async(req,res) => {
    try {
        const addProductsToCart = new CartStore(req.body);
        let insertProductsToCart = await addProductsToCart.save();
        res.status(201).send(insertProductsToCart);
    } catch (error) {
      console.log('error');
      res.status(400).send(error);
    }
};