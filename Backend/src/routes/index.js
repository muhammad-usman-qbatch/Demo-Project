import express from 'express';
const Router = express.Router();

import store from './store';

Router.use("/store", store);
// Router.use("/auth", user);

export default Router;