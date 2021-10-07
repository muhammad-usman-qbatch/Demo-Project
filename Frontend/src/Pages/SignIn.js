import React from 'react'
import { useHistory } from 'react-router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser} from '../reducers/authReducer';
import { useCookies } from 'react-cookie';

export default function SignIn() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookie, setCookie] = useCookies(['token']);
    const [message, setMessage] = useState('');
    const {feedback} = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();

    const setComponent = () => {
        history.push('/SignUp');
    }
    const user = {
      email,
      password
    }
    const authenticate = async () => {
        const res = await dispatch(signInUser(user));
        setMessage(res.meta.requestStatus)
         if(res.meta.requestStatus === 'rejected'){
           return history.push('/SignIn');
         }
        const { payload } = res || {};
        setCookie('token', payload.token);
        return history.push('/products')
    }
    return (
        <>
        <div className="row">
      <div className="row">
        <div className="input-field col s12">
          <input id="email" placeholder="Email" type="email" className="validate" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" placeholder="Password" type="password" className="validate" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
      </div>
          <h6 onClick={()=>setComponent()} id='h6-onhover'>Dont have an account ?</h6>
      <div>
      <button className="waves-effect waves-light btn" onClick={()=>authenticate()}>Sign In</button><br/>
      {
        message === 'rejected' &&
         <center><p id='shadow'>{feedback}</p></center>
      }
      </div>
  </div>
         </>
    )
}
