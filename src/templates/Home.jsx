import React from 'react';
import {getUserId, getUserName} from '../reducks/users/selectors';
import {useSelector, useDispatch} from 'react-redux';
import {signOut} from '../reducks/users/operations';
 
const Home = () => {
  const selector = useSelector(state => state);
  const dispatch = useDispatch();
  const uid = getUserId(selector);
  const username = getUserName(selector)

  return(
    <div>
      <h2>Home</h2>
      <p>ユーザーid: {uid}</p>
      <p>ユーザー名: {username}</p>
      <button onClick={() => dispatch(signOut())}>Sign Out</button>
    </div>
  )
}

export default Home;