import React from "react";
import { NavLink } from "react-router-dom";
import '../header.css'

function Header() {
    
    return (
        <div>        
            <p id='onHover'><NavLink to='/products'>Products</NavLink></p>
            <p id='onHover'><NavLink to='/cart'>Cart</NavLink></p>
        </div>
    )
}
export default Header;