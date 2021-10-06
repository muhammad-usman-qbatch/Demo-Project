import React from 'react';
import '../products.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsList } from '../reducers/productReducer';
import { addToCart, getFromCart } from '../reducers/cartReducer';
import { Link, Route,useRouteMatch } from 'react-router-dom';
import ProductDetail from './productDetail';

export default function Products() {
    
    const {url,path} = useRouteMatch();

    const {count, productsList} = useSelector((state) => state.productsReducer);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getProductsList());
    },[]);

    const addToCart1 = (product_id) => {
        dispatch(addToCart(product_id));
        dispatch(getFromCart());
    }

    return (
        <div>
           <h2>Total Products</h2>
           <p id='count'>{count}</p>
           <h1>Products :</h1>
            <table>
                <thead>
                    <tr>
                        <th style={{width: '30%'}}>ID</th>
                        <th style={{width: '11%'}}>Name</th>
                    </tr>
                </thead>
                <tbody>
                {productsList.map((product) => (
                  <tr key={product._id}>
                     <td id='p_id'>{product._id}</td>
                     <td><Link to={`${path}/${product._id}`} id='underLineTable'>{product.name}</Link></td>
                     <td id='cartButton'>
                        <button id='button' onClick = {()=>addToCart1(product._id)} disabled={!product.stock}>
                            Add to Cart
                        </button>
                     </td>
                  </tr>
                    ))}
                </tbody>
            </table>
            <Route path={`${url}/:p_id`} component={ProductDetail} />
            <marquee><p>Click on the Product Name to see the Product Detail :)</p></marquee>
        </div>
    )
};