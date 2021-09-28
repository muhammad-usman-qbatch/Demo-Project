const mongoose = require("mongoose");
const express = require('express');
const app = express();


mongoose.connect("mongodb://localhost:27017/products_store",
    {
        socketTimeoutMS: 30000,
        keepAlive: true,
    }
).then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log(e,"No connection");
})