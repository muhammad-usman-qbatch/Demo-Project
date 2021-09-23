import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getProductsList } from '../../reducers/getProducts';
import { getProductsList } from '../../reducers/getProducts';

export default function Products() {

    // const {count, productsList} = useSelector((state) => {
    //     console.log(`Product Count ${state.count}`);
    //     console.log(`Product List ${state.productsList}`);
    //     return state;
    // });

    const dispatch = useDispatch();

    // const getProductsList1 = () => {
    //     dispatch(getProductsList());
    // }

    // const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log("Fetching the Products:");
        dispatch(getProductsList());
        // let data = getProductsList1();
        // setProducts(data);
        // console.log(`Product list : ${data}`);
        // console.log(`Product list : ${productsList}`);
    },[])

    return (
        <div>
           {/* <button onClick = {()=>getProductsList1()}>get products</button> */}
           {/* <p>a.</p>
           <h1>{productsList}</h1>
           <p>b.</p>
           <h1>{products}</h1> */}
           <h2>Products</h2>
        </div>
    )
};