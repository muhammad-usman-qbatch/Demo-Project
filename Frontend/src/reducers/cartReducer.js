import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../config/axios';

export const addToCart = createAsyncThunk(
    'addToCart',
    async (data, getState, thunkAPI) => {
        try {
           const response = await axios({
                method: "post",
                url: "/store/addToCart",
                data: JSON.stringify({
                    "p_id" : data.product_id,
                    "name" : data.name,
                    "price" : data.price
                }),
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization": `Bearer ${data.tokenCookie}`
                }
                });
                alert('The Product has added.');
                return response.data
        } catch (error) {
            console.log("Error",error);
        }
    }
);

export const getFromCart = createAsyncThunk(
    'getCartList',
    async (data, getState, thunkAPI) => {
        try {
            console.log('token sending from get request', data.tokenCookie)
            let res = await axios({
                method : "get",
                url : "/store/cart",
                headers: {"Authorization": `Bearer ${data.tokenCookie}`}
            })
            console.log('get from cart response', res.data)
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
);

const cartsReducer= createSlice({
    name : 'Cart',
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
    [addToCart.fulfilled] : (state,action) => {
        console.log('add to cart', action.payload)
            state.cartList = action.payload;
            state.count = action.payload.length
    },
    [addToCart.pending] : (state,action) => {
            state.loading = true
    },
    [addToCart.rejected] : (state,action) => {
            state.loading = false
    },
    [getFromCart.fulfilled] : (state,action) => {
        console.log('get from cart', action.payload)
        state.cartList = action.payload
        state.count = state.cartList.length;
    },
    [getFromCart.pending] : (state,action) => {
        state.loading = true
    },
    [getFromCart.rejected] : (state,action) => {
        state.loading = false
    }
}
});

export const {getCount} = cartsReducer.actions
export default cartsReducer.reducer