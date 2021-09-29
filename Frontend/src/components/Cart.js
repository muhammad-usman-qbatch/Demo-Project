import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFromCart } from "../reducers/cartReducer";

export default function Cart() {

    const {count, cartList} = useSelector((state) => state.cartsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Fetching Products from cart")
        dispatch(getFromCart());
    }, [])

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
                     <th style={{width: '11%'}}>product id</th>
                 </tr>
             </thead>
             <tbody>
             {cartList.map((product,index) => (
               <tr key={product._id}>
                 <td>{product._id}</td>
                 <td>{product.p_id}</td>
               </tr>
                 ))}
             </tbody>
         </table>
     </div>
    )
}
