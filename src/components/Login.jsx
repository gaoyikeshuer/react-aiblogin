import React, { useEffect, useState } from "react";
import { useRef } from "react";
import AIB from "../icons/AIB.png";
import { ReactComponent as AlertTriangle } from '../icons/icon_alert-triangle.svg'
import { ReactComponent as Circle } from '../icons/icon_alert-circle.svg'

import "./Login.scss";
const USER_REGEX = /^[A-z](?=.*?[#?!@$%^&*-])/;
const PWD_REGEX = /^[A-z](?=.*?[#?!@$%^&*-])/;
const Login = ({ adminUser  }) => {
  const [details, setDetails] = useState({ username: "", password: "" });
  const [userExist, setUserExist] =useState(false);

  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState(null);
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const checkLogin = details =>{
    console.log(details)
    if(details.username === adminUser.username && details.password === adminUser.password){
      console.log("Loged in")
    } else{
      console.log("doesent match")
      setUserExist(true);
    }
  }

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
    setUserExist(false) // cuz everytime when user can't submit, will return to this input, so jst reset check userexist here
  }, [user]); //everytime username changes, detect whether it is valid

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    // const match = pwd === matchPwd;
    // setValidMatch(match);
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);



  const handleSubmit = (e) => {
    e.preventDefault(); // for security and stop refreshing console.log
    checkLogin(details);
    console.log(details);
  };

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <div className="icon">
        <img src={AIB} alt="." />
      </div>
     
      <h1 className="login-title">Mobile banking</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> User name</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => {
            setUser(e.target.value);
            setDetails({ ...details, username: e.target.value });
          }}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          className ={`${user && !validName? "login-alert": ""} ${userExist? "fail-input":''}`}
        />
        {/* if you want to let the message disappear when lose the focus onBlur ={() => setUserFocus(false) } */}
       <div className={`login-usertext ${  userFocus && user && !validName ? "instructions" : "offscreen"}`} >
       <AlertTriangle fill="none" stroke="none" style={{'width': '16px', "textColor": "yellow" }}/> 
       <p
          id="uidnote"
          className={
            userFocus && user && !validName ? "instructions" : "offscreen"
          }
        > 
         Your user name doesn't contain a special character <br />
        </p>
       </div>

       <div className={userExist? "fail-exist":'offscreen'}>
    <Circle style={{'width':'16px'}}/>
    <p>Your user name doesn't exist</p>
       </div>
     

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => {
            setPwd(e.target.value);
            setDetails({ ...details, password: e.target.value });
          }}
          required
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby="pwdnote"
          onFocus={() => setPwdFocus(true)}
          className ={pwd && !validName? "login-alert": ""}
     
        />
          <div className={`login-usertext ${  pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"}`} >
          <AlertTriangle fill="none" stroke="none" style={{'width': '16px', "textColor": "yellow" }}/> 
        <p
          id="pwdnote"
          className={ pwd&& pwdFocus && !validPwd ? "instructions" : "offscreen"}
        >
          Your password doesn't contain a special character
          <br />
        </p>
          </div>
 
        <button disabled={!validName || !validPwd ? true : false}>
          {" "}
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
