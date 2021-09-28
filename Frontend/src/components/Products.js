import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsList} from '../reducers/getProducts';
import '../products.css'

export default function Products() {

    const {count, productsList} = useSelector((state) => {
        console.log("Product Count", state.count);
        return state;
    });

    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log("Fetching the Products:");
        dispatch(getProductsList());
    },[]);

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
                {productsList.map((product,index) => (
                  <tr key={product._id}>
                     <td>{product._id}</td>
                     <td>{product.name}</td>
                     <td>{product.price}</td>
                     <td>{product.stock}</td>
                     <td id='cartButton'><p id='box'>Add to Cart</p></td>
                  </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};