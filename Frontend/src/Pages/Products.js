import React, { useState, useEffect } from 'react';
import '../products.css';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsList } from '../reducers/productReducer';
import { addToCart, getFromCart } from '../reducers/cartReducer';
import { Link, Route,useRouteMatch } from 'react-router-dom';
import ProductDetail from './productDetail';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';
import Navbar from 'react-bootstrap/Navbar';
export default function Products() {
    
    const {url,path} = useRouteMatch();
    const [tokenCookie, setCookie] = useState();
    const {count, productsList} = useSelector((state) => state.productsReducer);
    const {cartList} = useSelector((state) => state.cartsReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {  
        dispatch(getProductsList());
    },[]);
  
    const addToCart1 = (product_id,name,price, tokenCookie) => {
        tokenCookie = Cookies.get('token');
        setCookie(tokenCookie);
        if(!tokenCookie){
            return history.push('/SignIn');
        }
        dispatch(addToCart({product_id, name, price, tokenCookie}));
        dispatch(getFromCart({tokenCookie}));
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
                        <button id='button' onClick = {()=>addToCart1(product._id, product.name, product.price, tokenCookie)} disabled={!product.stock}>
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