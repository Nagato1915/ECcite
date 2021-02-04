import React, {useState} from 'react';
import {TextInput, PrimaryButton} from '../components/UIkit'
import { useCallback } from 'react';
import {signUp} from '../reducks/users/operations';
import {useDispatch} from "react-redux";
import {push} from "connected-react-router";

const SignUp = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState(""),
        [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        [confirmPassword, setConfirmPassword] = useState("");


    const inputUsername = useCallback((e) => {
      setUsername(e.target.value)
    }, [setUsername]);

    const inputEmail = useCallback((e) => {
      setEmail(e.target.value)
    }, [setEmail]);

    const inputPassword = useCallback((e) => {
      setPassword(e.target.value)
    }, [setPassword]);

    const inputConfirmPassword = useCallback((e) => {
      setConfirmPassword(e.target.value)
    }, [setConfirmPassword]);

  return(
    <div className="page-container">
      <h2 className="page-ttl">新規会員登録</h2>
      <div className="module-spacer--medium" />
      <TextInput 
         label={"ユーザー名"} required={true} value={username} type={"text"} onChange={inputUsername}
      />
      <TextInput 
        label={"メールアドレス"} required={true} value={email} type={"email"} onChange={inputEmail}
      />
      <TextInput 
        label={"パスワード"} required={true} value={password} type={"password"} onChange={inputPassword}
      />
      <TextInput 
        label={"パスワード(確認用)"} required={true} value={confirmPassword } type={"password"} onChange={inputConfirmPassword}
      />
      <div className="module-spacer--medium" />
      <div className="center">
        <PrimaryButton 
          label={"アカウントを登録する"}
          onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
        />
      </div>
      <div className="module-spacer--medium" />
      <p className="link" onClick={() => dispatch(push("/signin"))}>アカウントをお持ちの方はこちら。</p>

    </div>
  )
}

export default SignUp;