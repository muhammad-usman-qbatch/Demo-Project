import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFromCart } from "../reducers/cartReducer";
import '../products.css';
import { addToken } from "../reducers/authReducer";
import { useHistory } from "react-router";
import Cookies from "js-cookie";
export default function Cart() {

    let {count, cartList} = useSelector((state) => state.cartsReducer);
    let {token} = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const tokenCookie = Cookies.get('token')
    console.log('get api token', tokenCookie);

    if(!token){
        dispatch(addToken(tokenCookie));
    }

    useEffect(() => {
        if(!tokenCookie){
            return history.push('/SignIn')
        }
        dispatch(getFromCart({tokenCookie}));
    },[])

    return (
        <div>
            {
                cartList.length>0 &&
                <>
        <h2>Products in Cart</h2>
        <p id='count'>{count}</p>
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
                  <td>{product.detail.name}</td>
                  <td>{product.detail.price}</td>
               </tr>
                 ))}
             </tbody>
         </table>
         </>
         }
         {
             cartList.length<=0 && 
             <div id='padding'>
             <center><h1 id='emptyCart'>Your Cart is empty</h1></center>
             </div>
         }
     </div>
    )
}