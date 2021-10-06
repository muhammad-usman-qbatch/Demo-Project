import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../config/axios';

export const signUpUser = createAsyncThunk(
    'SignUpUser',
    async (body , thunkAPI) =>{
        try {
            console.log(body);
            console.log("add user api");
            const res = await axios({
                method: "post",
                url: "/auth/SignUp",
                data:JSON.stringify(body),
                headers: { "Content-type" : "application/json" }
            });
            console.log('SignUp User onli res',res);
            console.log('SignUp User onli res.data',res.data);
            return res.data;
        } catch (error) {
            const err = error
            console.log('err',err.response.data.error);
            if (err.response) {
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

export const signInUser = createAsyncThunk(
    'SignInUser',
    async(body, thunkAPI) => {
        try {
            const res = await axios({
                method: "post",
                url: "/auth/SignIn",
                data: JSON.stringify(body),
                headers: {"Content-Type": "application/json"}
            });
            return res.data
        } catch (error) {
            const err = error;
            if (err.response){
                return thunkAPI.rejectWithValue({
                    error : err.response.data.error,
                    status : err.response.status
                });
            }
            return thunkAPI.rejectWithValue({
                error : "Network error"
            });
        }
    }
)

const authReducer = createSlice({
    name : 'auth',
    initialState :{
        token: "",
        feedback: "",
        loading:false
    },
    reducers:{},
    extraReducers:{
        [signUpUser.fulfilled] : (state,action) => {
            state.loading = false;
            state.feedback = action.payload.message;
        },
        [signUpUser.pending] : (state,action) => {
            state.loading = true;
        },
        [signUpUser.rejected] : (state,action) => {
            state.feedback = action.payload.error
            state.loading = false;
        },
        [signInUser.fulfilled] : (state,action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.feedback = "";
        },
        [signInUser.pending] : (state,action) => {
            state.loading = true;
        },
        [signInUser.rejected] : (state,action) => {
            state.feedback = action.payload.error
            state.loading = false;
        }
    }
});

export default authReducer.reducer;