import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {signUpUser} from '../reducers/authReducer';

export default function SignUp() {

     const [first_name, setfn] = useState('');
     const [last_name, setln] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
  
     const {feedback} = useSelector((state) => state.authReducer);
     const dispatch = useDispatch();
     const history = useHistory();

     const setComponent = () => {
         history.push('/SignIn');
     }
     const user = {
         first_name,
         last_name,
         email,
         password
     }
     const registration = () => {
         console.log("SIGN UP123");
         dispatch(signUpUser(user));
     }

     return (
         <>
        <div className="row">
      <div className="row">
        <div className="input-field col s6">
          <input id="first_name" placeholder="First Name" type="text" className="validate" value={first_name} onChange={(e)=>setfn(e.target.value)}/>
        </div>
        <div className="input-field col s6">
          <input id="last_name" placeholder="Last Name" type="text" className="validate" value={last_name} onChange={(e)=>setln(e.target.value)}/>
        </div>
      </div>
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
          <h6 onClick={()=>setComponent()} id='h6-onhover'>Already have an account ?</h6>
      <div>
      <button className="waves-effect waves-light btn" onClick={()=>registration()}>Sign Up</button><br/>
      <center><p id='shadow'>{feedback}</p></center>
      </div>
  </div>
         </>
     )
}