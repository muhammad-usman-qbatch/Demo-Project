import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./Pages/Products";
import Header from './components/Header'
import Cart from "./components/Cart";
// import productDetail from "./Pages/productDetail";

const App = () => {
    return (    
        <div> 
            <Router>
            <Header />
                <Switch>
                  {/* <Route path="/products/:p_id" component={productDetail} />  */}
                  <Route path="/products" component={Products} />
                  <Route exact path="/cart" component={Cart} /> 
                </Switch>   
            </Router>
        </div>
    );
};
export default App