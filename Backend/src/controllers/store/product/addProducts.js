import express from 'express';
import ProductsStore from '../../../models/products';

exports.addingProducts = async(req,res) => {
    try {
        const addProducts = new ProductsStore(req.body);
        let insertProducts = await addProducts.save();
        res.status(201).send(insertProducts);
    } catch (error) {
        res.status(400).send(error);
    }
};