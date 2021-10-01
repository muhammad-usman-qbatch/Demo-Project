import React from 'react';
import '../products.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsList } from '../reducers/productReducer';
import { addToCart, getFromCart } from '../reducers/cartReducer';

export default function Products() {

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
           <h1>Products Count</h1>
           <p>{count}</p>
           <h1>Products List Length</h1>
           <p>{productsList.length}</p>
           <h1>Products Detail</h1>
            <table>
                <thead>
                    <tr>
                        <th style={{width: '30%'}}>ID</th>
                        <th style={{width: '11%'}}>Name</th>
                        <th style={{width: '11%'}}>Price</th>
                        <th style={{width: '10%'}}>Stock</th>
                    </tr>
                </thead>
                <tbody>
                {productsList.map((product) => (
                  <tr key={product._id}>
                     <td id='p_id'>{product._id}</td>
                     <td>{product.name}</td>
                     <td>{product.price}</td>
                     <td>{product.stock}</td>
                     <td id='cartButton'>
                        <button id='button' onClick = {()=>addToCart1(product._id)} disabled={!product.stock}>
                            Add to Cart
                        </button>
                     </td>
                  </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};