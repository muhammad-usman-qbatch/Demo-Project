const express = require('express');
const ProductsStore = require('../../../models/products');

const gettingProducts = async(req,res) => {
    try {
        const getProducts = await ProductsStore.find({});
        res.json(getProducts);
    } catch (error) {
        res.status(400).send(error);
    }
};

export default gettingProducts;