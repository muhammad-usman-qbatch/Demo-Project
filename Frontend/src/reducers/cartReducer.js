import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../config/axios';

export const addToCart = createAsyncThunk(
    'addToCart',
    async (data, getState, thunkAPI) => {
        try {
            console.log('data', data);
           const response = await axios({
                method: "post",
                url: "/store/addToCart",
                data: JSON.stringify({
                    "p_id" : data.product_id
                }),
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization": `Bearer ${data.tokenCookie}`
                }
                });
                alert('The Product has added.');
                console.log('add to cart response', response.data);
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
            let res = await axios({
                method : "get",
                url : "/store/cart",
                headers: {"Authorization": `Bearer ${data.tokenCookie}`}
            })
            console.log('get from cart response', res.data);
            return res.data
        } catch (error) {
            const err = error
            if (err.response) {
                console.log('error',err.response.data.error)
              return thunkAPI.rejectWithValue({
                error:   err.response.data.error,
                status: err.response.status,
              });
            }
            return thunkAPI.rejectWithValue({
              error: "Network Error",
            });
          }
    }
);

const cartsReducer= createSlice({
    name : 'Cart',
    initialState: {
        count : 0,
        name:'',
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
        console.log('get from cart paylad', action.payload.products.length)
        state.name = action.payload.name
        state.cartList = action.payload.products
        console.log('cartList', state.cartList);
        state.count = state.cartList.length;
    },
    [getFromCart.pending] : (state,action) => {
        state.loading = true
    },
    [getFromCart.rejected] : (state,action) => {
        console.log('rejected', action.payload)
        state.cartList = [];
        state.count = 0;
        state.loading = false
    }
}
});

export const {getCount} = cartsReducer.actions
export default cartsReducer.reducer