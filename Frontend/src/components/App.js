import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./Products";
import Header from "./Header";
import Cart from "./Cart";

const App = () => {
    return (    
        <div> 
            <Router>
            <Header />
                <Switch>
                  <Route exact path="/products" component={Products} />
                  <Route exact path="/cart" component={Cart} /> 
                  </Switch>     
            </Router>
        </div>
    );
};
export default App