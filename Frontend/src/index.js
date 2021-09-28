import React from "react";
import ReactDOM  from "react-dom";
import App from './components/App'
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import productsReducer from './reducers/productReducer';
import cartReducer from "./reducers/cartReducer";
import logger from 'redux-logger';
import { combineReducers } from "redux";

// const allReducers = combineReducers({
//     productsReducer,
//     cartReducer
// })
const store = configureStore({
    reducer : productsReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <App /> 
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );