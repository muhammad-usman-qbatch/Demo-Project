import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../header.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
    
    return (
        // <div>        
        //     <p id='onHover'><NavLink to='/products'>Products</NavLink></p>
        //     <p id='onHover'><NavLink to='/cart'>Cart</NavLink></p>
        // </div>

        <>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <NavLink to='/products' id='underLine'><Navbar.Brand>Products</Navbar.Brand></NavLink>
         <NavLink to='/cart' id='underLine'><Navbar.Brand>Cart</Navbar.Brand></NavLink>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">

         <Nav className="mr-auto">
            <Link to='/login' id='underLine'><Navbar.Brand>Login</Navbar.Brand></Link> 
            <Link to='/SignUp' id='underLine'><Navbar.Brand>Sign Up</Navbar.Brand></Link> 
         </Nav>
  </Navbar.Collapse>
</Navbar>
      </>
    )
}
export default Header;