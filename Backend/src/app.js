import express from "express";
import cors from 'cors';
import Router from './routes';
import dotenv from 'dotenv'
import path from 'path';
const app = express();

dotenv.config({ path: path.resolve(__dirname, './.env') });

require("../src/db/conn")
app.use(express.json());
app.use(cors());

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// const port = process.env.PORT || 4000;
app.use("/", Router);

app.listen(port, () => {
    console.log(`connection is live at port : ${port}`);
})