import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

function Header() {
    let {products, setProduct} = useState(0);
    return (
        <div>        
            {/* <Products /> */}
            <p><NavLink to='/products'>Products</NavLink></p>
            <p><NavLink to='/cart'>Cart</NavLink></p>
            <h1>Total Products : {products}</h1>
        </div>
    )
}
export default Header;