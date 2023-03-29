import React from "react";
import { provider, auth } from "./config";
import styled from "styled-components";
import { signInWithPopup } from "firebase/auth";
import  "./index.css";


const Login = ({ isAuth }) => {
  const signInWithGoogle = () => {
    console.log("in");
    signInWithPopup(auth, provider).then((result) => console.log(result));
  };
  return (
    <div className="loginPage">
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign In With Google
      </button>
    </div>
  );
};

export default Login;