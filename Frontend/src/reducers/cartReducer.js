import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../config/axios';

export const addToCart = createAsyncThunk(
    'addToCart',
    async (product_id) => {
        try {
           const response=  await axios({
                method: "post",
                url: "/store/addToCart",
                data: JSON.stringify({
                    "p_id" : product_id
                }),
                headers: { "Content-Type": "application/json" }
                });
                return response.data
        } catch (error) {
            console.log("Error",error);
        }
    }
);

export const getFromCart = createAsyncThunk(
    'getCartList',
    async () => {
        try {
            let res = await axios.get("/store/cart");
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
            console.log("payload of add_to_cart", action.payload)
            // console.log('count of cart', action.payload.length);
            return {
                        ...state,
                        cartList : action.payload
                    }
            // state.count = action.payload.length
    },
    [addToCart.pending] : (state,action) => {
            state.loading = true
    },
    [addToCart.rejected] : (state,action) => {
            state.loading = false
    },
    [getFromCart.fulfilled] : (state,action) => {
        console.log("payload of get_from_cart", action.payload)
        state.cartList = action.payload
        state.count = action.payload.length
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