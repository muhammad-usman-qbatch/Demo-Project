import express from "express";
import ProductsStore from '../src/models/products';
import cors from 'cors';
import Router from './routes';
const app = express();

require("../src/db/conn")

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 4000;
app.use("/", Router);

app.listen(port, () => {
    console.log(`connection is live at port : ${port}`);
})