import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { element } from "prop-types";
import axios from '../config/axios';

export const addToCart = createAsyncThunk(
    'addToCart',
    async () => {
        try {
            let res = await axios.post("/products/addToCart", product_id);
            console.log("Add to Cart", res);
        } catch (error) {
            console.log(error);
        }
    }
);

const cartsReducer= createSlice({
    name : 'addToCart',
    initialState: {
        count : 0,
        cartList : [],
        loading: false
    },
    reducers : {
        // getCount(state, action){
        //     state.count = action.payload
        // }
    },
    extraReducers:{
        [addToCart.fulfilled] : (state, action) => {
            state.cartList = action.payload
            state.count = action.payload.length
        },
        [addToCart.pending] : (state, action) => {
            state.loading = true
        },
        [addToCart.rejected] : (state, action) => {
            state.loading = false
        },
    }
});

export const {getCount} = cartsReducer.actions
export default cartsReducer.reducer