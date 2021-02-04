import React, {useState} from 'react';
import {TextInput, PrimaryButton} from '../components/UIkit'
import { useCallback } from 'react';
import {resetPassword} from '../reducks/users/operations';
import {useDispatch} from "react-redux";
import {push} from "connected-react-router";

const Reset = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const inputEmail = useCallback((e) => {
      setEmail(e.target.value)
  }, [setEmail]);

   
  return(
    <div className="page-container">
      <h2 className="page-ttl">パスワードのリセット</h2>
      <div className="module-spacer--medium" />
      <TextInput 
        label={"メールアドレス"} required={true} value={email} type={"email"} onChange={inputEmail}
      />
      <div className="module-spacer--medium" />
      <div className="center">
        <PrimaryButton 
          label={"パスワードをリセット"}
          onClick={() => dispatch(resetPassword(email))}
        />
      </div>
      <div className="module-spacer--medium" />
      <p onClick={() => dispatch(push("/signout"))}>ログイン画面に戻る</p>

    </div>
  )
}

export default Reset;