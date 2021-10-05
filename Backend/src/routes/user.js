import express from 'express';
import { AddingUsers } from '../controllers/store/user/SignUp';
import { loginUser } from '../controllers/store/user/SignIn';
import { requireLogin } from '../middlewares/auth';
// const auth = require('../middlewares/auth')
const Router = express.Router();

// user related requests

Router.post('/SignUp', AddingUsers);
Router.post('/SignIn', loginUser);
Router.get('/welcome',requireLogin,(req,res)=>{
    res.json({hello:`Hello how r u ? ${req.user.email}`});
})

export default Router;