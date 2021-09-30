const express = require('express');
const ProductsStore = require('../../../models/products');

const addingProducts = async(req,res) => {
    try {
        const addProducts = new ProductsStore(req.body);
        let insertProducts = await addProducts.save();
        res.status(201).send(insertProducts);
    } catch (error) {
        res.status(400).send(error);
    }
};

export default addingProducts;