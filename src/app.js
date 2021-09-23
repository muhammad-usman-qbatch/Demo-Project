const express = require("express");
const app = express();

const ProductsStore = require('../src/models/products');
require("../src/db/conn")

const port = process.env.PORT || 3000;

app.post("/products", async(req,res) => {
    try {
        const addProducts = new ProductsStore(req.body);
        console.log(req.body);
        addProducts.save();
    } catch (error) {
        res.send(error);
    }
})

app.listen(port, () => {
    console.log(`connection is live at port : ${port}`);
})