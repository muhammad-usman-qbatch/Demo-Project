import express from 'express';
import ProductsStore from '../../../models/products';

exports.gettingProducts = async(req,res) => {
    try {
        const getProducts = await ProductsStore.find({});
        res.json(getProducts);
    } catch (error) {
        res.status(400).send(error);
    }
};