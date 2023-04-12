import React from "react";
import { provider, auth } from "./config";
import styled from "styled-components";
import { signInWithPopup } from "firebase/auth";
import "./index.css";
import GoogleLogo from "./img/google-logo.png";
import { CardTitle, CardSubtitle, Input, Container } from "reactstrap";
const IMG = styled("img")`
  width: 2rem;
  height: 2rem;
`;

const Button = styled("button")`
  width: 20rem;
  height: 3rem;
  
  
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  padding: 5px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
  color: #757575;
  font-size: 25px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;
`;
const SignIn = ({ isAuth }) => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem("Auth", true);
      isAuth(true);
    });
  };
  return (
    <Container style={{ width: "20rem", height: "50rem" }}>
      <div className="SignIn">
        <div className="SignIn-left">
          <img src="" alt="" />
        </div>
        <div className="SignIn-right">
          <h1>Sigh in to Rent</h1>
          <CardTitle style={{ marginLeft: "8rem", display: "flex" }}>
            Rent
          </CardTitle>

          <CardSubtitle style={{ marginLeft: "0rem" }}>
            Welcome to Rent
          </CardSubtitle>
          <Input type="text" placeholder="Email" />
          <br></br>
          <Input type="password" placeholder="Password" />

          <div>
            <hr style={{ width: "50%" }} />
            <div className="container"></div>
          </div>
          <Button
            style={{ marginTop: "rem", marginLeft: "-1rem" }}
            onClick={signInWithGoogle}
          >
            Sign In
          </Button>
        </div>
      </div>
    </Container>
  );
};

// export default Login;
export default SignIn;
