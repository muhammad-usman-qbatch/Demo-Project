const express = require("express");
const app = express();
const cors = require("cors");


require("../src/db/conn")
const ProductsStore = require('../src/models/products');
const router = require('./routers/products')

const port = process.env.PORT || 4000;


app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`connection is live at port : ${port}`);
})