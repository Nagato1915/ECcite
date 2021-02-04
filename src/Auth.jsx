import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getIsSignedIn} from "./reducks/users/selectors";
import { useEffect } from 'react';
import { listenAuthState } from './reducks/users/operations';

const Auth = ({children}) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);

   useEffect(() => {
    if (!isSignedIn) {
      dispatch(listenAuthState())
    }
   }, []);

   if (!isSignedIn) {
     return <></>
   } else {
     return children
   }

}

export default Auth;