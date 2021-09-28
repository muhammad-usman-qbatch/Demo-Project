import React from "react";
import ReactDOM  from "react-dom";
import App from './components/App'
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import productsReducer from './reducers/getProducts';
import logger from 'redux-logger';


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