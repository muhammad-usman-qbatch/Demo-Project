import express from 'express';
import { AddingToCart } from '../controllers/store/cart/addToCart';
import { gettingFromCart } from '../controllers/store/cart/getFromCart';
import { gettingProducts } from '../controllers/store/product/getProducts';
import { addingProducts } from '../controllers/store/product/addProducts';
import { getProductDetail } from '../controllers/store/product/getProductDetail';
import { requireLogin } from '../middlewares/auth';

const Router = express.Router();

// cart related requests
Router.post('/addToCart',requireLogin, AddingToCart);
Router.get('/cart',requireLogin, gettingFromCart);

// product related requests
Router.post('/products', addingProducts);
Router.get('/products', gettingProducts);
Router.get('/products/details/:p_id', getProductDetail);


export default Router;