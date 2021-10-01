import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    
    return (
        <div>        
            <p><NavLink to='/products'>Products</NavLink></p>
            <p><NavLink to='/cart'>Cart</NavLink></p>
        </div>
    )
}
export default Header;