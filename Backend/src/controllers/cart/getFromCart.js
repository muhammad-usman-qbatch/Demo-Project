const express = require('express');
const CartStore = require('../../models/cart');
const ProductsStore = require('../../models/products');

const getFromCart = async(req,res) => {
    try {
        await CartStore.aggregate([
            {
              "$project": {
                "p_id": {
                  "$toObjectId": "$p_id"
                }
              }
            },
            {
              $lookup: {
                from: 'productstores',
                localField: 'p_id',
                foreignField: '_id',
                as: "product_store"
              }
            },
            {
                $unwind: "$product_store",
            },
          ])
            .then((result) => {
              res.json(result);
            })
            .catch((error) => {
              console.log(error);
            });
    } catch (error) {
        res.status(400).send(error);
    }
};