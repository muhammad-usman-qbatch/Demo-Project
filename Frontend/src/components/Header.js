import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

function Header() {
    
    return (
        <div>        
            <p><NavLink to='/products'>Products</NavLink></p>
            <p><NavLink to='/cart'>Cart</NavLink></p>
        </div>
    )
}
export default Header;