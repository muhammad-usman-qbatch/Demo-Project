const express = require("express");
const app = express();
// const cors = require("cors");
const router = require('./routes')

require("../src/db/conn")
const ProductsStore = require('../src/models/products');
app.use(express.json());
// app.use(cors());
// const router = require('./routers/products')
// const cartRouter = require('./routers/cart')
console.log('app.js', router);
const port = process.env.PORT || 4000;
app.use("/", router);
// app.use(app.router);
// routes.initialize(app);



app.listen(port, () => {
    console.log(`connection is live at port : ${port}`);
})