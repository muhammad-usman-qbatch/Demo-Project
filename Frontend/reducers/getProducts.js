import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    count : 0,
    productsList : []
};

export const getProductsList = createAsyncThunk(
    'getProductsList',
    async () => {
        const res = await fetch("http://localhost:4000/products",{
            mode:'no-cors'
        })
        console.log("create async thunk",res);
        const res1 = await res.json();
        console.log(`Fetching data ${res1}`);
        return res1
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
            state.productsList = action.payload
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