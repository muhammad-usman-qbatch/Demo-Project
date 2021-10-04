import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProductsdetail} from '../reducers/productReducer';
import { useEffect } from 'react';
import { useParams } from 'react-router';

export default function ProductDetail() {

    const { p_id } = useParams();
    const { product_description } = useSelector((state) => state.productsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsdetail({ id:p_id }));
    },[p_id]);

    return (
        <div>
            <h1>Product Details :</h1>
            <h2>ID</h2>
            {product_description._id}
            <p></p>
            <h2>Name</h2>
            {product_description.name}
            <p></p>
            <h2>Price</h2>
            {product_description.price}
            <p></p>
            <h2>Description</h2>
            {product_description.description}
            <p></p>
        </div>
    )
}
