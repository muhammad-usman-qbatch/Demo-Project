import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./Pages/Products";
import Header from './components/Header'
import Cart from "./components/Cart";

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