const express = require('express');
const Router = express.Router();
const store = require('./store');

Router.post("/store", (req,res, next) => {
    console.log('in stores');
    next()
}, store);

module.exports = Router;