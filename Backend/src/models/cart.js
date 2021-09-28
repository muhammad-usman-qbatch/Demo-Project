const express = require('express');
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    p_id : {
        type : String,
        required : true
    }
});

const CartStore = new mongoose.model("CartStore", cartSchema);
module.exports = CartStore;