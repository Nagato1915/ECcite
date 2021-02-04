import React, {useState} from 'react';
import {TextInput, PrimaryButton} from '../components/UIkit'
import { useCallback } from 'react';
import {signIn} from '../reducks/users/operations';
import {useDispatch} from "react-redux";
import {push} from 'connected-react-router';

const SignIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState(""),
        [password, setPassword] = useState("");

    const inputEmail = useCallback((e) => {
      setEmail(e.target.value)
    }, [setEmail]);

    const inputPassword = useCallback((e) => {
      setPassword(e.target.value)
    }, [setPassword]);

  return(
    <div className="page-container">
      <h2 className="page-ttl">サインイン</h2>
      <p>ご登録のメールアドレスとパスワードをご入力ください</p>
      <div className="module-spacer--medium" />
     
      <TextInput 
        label={"メールアドレス"} required={true} value={email} type={"email"} onChange={inputEmail}
      />
      <TextInput 
        label={"パスワード"} required={true} value={password} type={"password"} onChange={inputPassword}
      />
      <div className="module-spacer--medium" />
      <div className="center">
        <PrimaryButton 
          label={"Sign in"}
          onClick={() => dispatch(signIn(email, password))}
        />
         <div className="module-spacer--medium" />
        <p className="link" onClick={() => dispatch(push("/signup"))}>アカウントをお持ちでない方はこちら</p>
        <p className="link" onClick={() => dispatch(push("/signin/reset"))}>パスワードを忘れた方はこちら</p>
      </div>

    </div>
  )
}

export default SignIn;