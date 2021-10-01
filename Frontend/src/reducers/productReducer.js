import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../config/axios';

export const getProductsList = createAsyncThunk(
    'getProductsList',
    async () => {
        try {
            let res = await axios.get("/store/products");
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
);

const productsReducer= createSlice({
    name : 'Products',
    initialState: {
        count : 0,
        productsList : [],
        loading: false
    },
    reducers : {
        // getCount(state, action){
        //     state.count = action.payload
        // }
    },
    extraReducers:{
        [getProductsList.fulfilled] : (state, action) => {
            state.productsList = action.payload
            state.count = action.payload.length
        },
        [getProductsList.pending] : (state, action) => {
            state.loading = true
        },
        [getProductsList.rejected] : (state, action) => {
            state.loading = false
        },
    }
});

// export const {getCount} = productsReducer.actions
export default productsReducer.reducer