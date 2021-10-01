import express from 'express';
const Router = express.Router();

import store from './store';

Router.use("/store", store);

export default Router;