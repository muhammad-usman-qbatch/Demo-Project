import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFromCart } from "../reducers/cartReducer";

export default function Cart() {

    let {count, cartList} = useSelector((state) => state.cartsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFromCart());
    },[])

    return (
        <div>
        <h1>Cart Count</h1>
        <p>{count}</p>
        <h1>Cart List Length</h1>
        <p>{cartList.length}</p>
        <h1>Cart Detail</h1>
         <table>
             <thead>
                 <tr>
                     <th style={{width: '30%'}}>ID</th>
                     <th style={{width: '11%'}}>Name</th>
                     <th style={{width: '11%'}}>Price</th>
                 </tr>
             </thead>
             <tbody>
             {cartList.map((product) => (
               <tr key={product._id}>
                  <td id='p_id'>{product.p_id}</td>
                  <td>{product.product_store.name}</td>
                  <td>{product.product_store.price}</td>
               </tr>
                 ))}
             </tbody>
         </table>
     </div>
    )
}
