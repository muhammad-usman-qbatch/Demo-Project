const express = require("express");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    }
});

const ProductsStore = new mongoose.model("ProductStore", productSchema);
module.exports = ProductsStore;