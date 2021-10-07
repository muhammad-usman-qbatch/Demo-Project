import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../header.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { getFromCart } from "../reducers/cartReducer";
import { useEffect } from 'react';

function Header() {

  const tokenCookie = Cookies.get('token');
  const dispatch = useDispatch();
  const {count} = useSelector((state) => state.cartsReducer);

  useEffect(() => {
    dispatch(getFromCart({tokenCookie}))
  },[count]);

    return (
        <>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <NavLink to='/products' id='underLine'><Navbar.Brand>Products</Navbar.Brand></NavLink>
         <NavLink to='/cart' id='underLine'><Navbar.Brand>Cart</Navbar.Brand></NavLink>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">

         <Nav className="mr-auto">
            <Link to='/SignIn' id='underLine'><Navbar.Brand>Login</Navbar.Brand></Link> 
            <Link to='/SignUp' id='underLine'><Navbar.Brand>Sign Up</Navbar.Brand></Link> 
         </Nav>
         <Navbar.Brand id='right'>items in cart: {count} </Navbar.Brand>
  </Navbar.Collapse>
</Navbar>
      </>
    )
}
export default Header;