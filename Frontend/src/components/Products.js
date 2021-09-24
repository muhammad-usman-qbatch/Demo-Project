import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsList, getCount } from '../../reducers/getProducts';

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
           <h2>Products Count</h2>
           <h1>{count}</h1>
           <h2>Products List Length</h2>
           <h1>{productsList.length}</h1>
           <h2>Products Detail</h2>
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
                  <tr>
                     <td>{product._id}</td>
                     <td>{product.name}</td>
                     <td>{product.price}</td>
                     <td>{product.stock}</td>
                     <button>Add to Cart</button>
                  </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};