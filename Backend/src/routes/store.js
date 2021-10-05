import express from 'express';
import { AddingToCart } from '../controllers/store/cart/addToCart';
import { gettingFromCart } from '../controllers/store/cart/getFromCart';
import { gettingProducts } from '../controllers/store/product/getProducts';
import { addingProducts } from '../controllers/store/product/addProducts';
import { getProductDetail } from '../controllers/store/product/getProductDetail';

const Router = express.Router();

// cart related requests
Router.post('/addToCart', AddingToCart);
Router.get('/cart', gettingFromCart);

// product related requests
Router.post('/products', addingProducts);
Router.get('/products', gettingProducts);
Router.get('/products/details/:p_id', getProductDetail);


export default Router;