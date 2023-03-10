import React from "react";
import styled from "styled-components";
import RentLogo from "./home1.png";

const Container = styled("div")`
  margin: 4rem;
  color: black;
  font-size: 20px;
  height: calc(100vh - 5rem);
  background-size: 100% 90%;
`;
const P = styled("p")`
  color: grey;
`;
const Input = styled("input")``;
const Buttonn = styled("button")`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid black;
  color: black;
`;
const Logo = styled("img")`
  width: 50px;
  height: 50px;
`;

function Section() {
  return (
    <Container>
      <h1>
        Discover Your
        <br></br>
        Living Dream
        <br></br>
        Property
      </h1>
      <P>
        Working with us and build your dream property. We provide
        <br></br>
        confortable prices for our client so don't delay
      </P>
      <div>
        <Input placeholder="Search by location" />
        <Buttonn>Search</Buttonn>
      </div>
      
    </Container>
  );
}

export default Section;
