import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {signIn} from '../reducks/users/operations';

const Login = () => {
  const dispatch = useDispatch();
  
  return(
    <div>
      <h2>Login</h2>
      <button onClick={() => dispatch(signIn())}>
      ログインする  
      </button>
    </div>
  )
}

export default Login;