import express from 'express';
const Router = express.Router();

import store from './store';
import user from './user';

Router.use("/store", store); // product and cart related
Router.use("/auth", user);   //  user related

export default Router;