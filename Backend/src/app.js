const express = require("express");
const app = express();
// const bodyParser = require('body-parser')
require("../src/db/conn")
const ProductsStore = require('../src/models/products');
const router = require('./routers/products')

const port = process.env.PORT || 3000;

// app.use(bodyParser.json());
app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`connection is live at port : ${port}`);
})