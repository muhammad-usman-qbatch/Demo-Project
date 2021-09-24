import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState = {
    count : 0,
    productsList : []
};

export const getProductsList = createAsyncThunk(
    'getProductsList',
    async () => {
        let res = await axios.get("http://localhost:4000/products")
        // console.log("create async thunk ",res.data);
        console.log("create async thunk ",res.data);
        const res1 = await res.json();
        // return res.data
        return res1.data
    }
);

const productsReducer= createSlice({
    name : 'Products',
    initialState,
    reducers : {
        getProducts2(state, action){
            state.productsList = action.payload
        }
    },
    extraReducers:{
        [getProductsList.fulfilled] : (state, action) => {
            console.log("payload",action.payload);
            state.productsList = action.payload
            // return {
            //     ...state,
            //     productsList:action.payload
            // }
        },
        [getProductsList.pending] : (state, action) => {
            state.productsList = 'Loading...'
        },
        [getProductsList.rejected] : (state, action) => {
            state.productsList = 'Try again...'
        },
    }
});

export const {getProducts2} = productsReducer.actions
export default productsReducer.reducer