import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import productsReducer from './reducers/productReducer';
import cartsReducer from './reducers/cartReducer'
import authReducer from "./reducers/authReducer";
import logger from 'redux-logger';

const store = configureStore({
    reducer : {
    productsReducer,
    cartsReducer,
    authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

ReactDOM.render(
    // <React.StrictMode>
        <Provider store={store}>
        <App /> 
        </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
  );