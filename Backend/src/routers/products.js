const express = require("express");
const router = new express.Router();

const ProductsStore = require('../models/products');

router.post("/products", async(req,res) => {
    try {
        const addProducts = new ProductsStore(req.body);
        console.log(req.body);
        let insertProducts = await addProducts.save();
        res.status(201).send(insertProducts);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/products", async(req,res) => {
    try {
        const getProducts = await ProductsStore.find({});
        res.send(getProducts);
        console.log(getProducts);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;