import React from 'react'
import { useHistory } from 'react-router';
import { useState } from 'react';

export default function SignIn() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const setComponent = () => {
            history.push('/SignUp');
    }

    const authenticate = () => {
        
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
          <h6 onClick={()=>setComponent()}>Dont have an account ?</h6>
      <button className="waves-effect waves-light btn" onClick={()=>authenticate()}>Sign In</button>
  </div>
         </>
    )
}
