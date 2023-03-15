import React from "react";
import styled from "styled-components";
import Photo from "./img/дом.png";
import Card from "./Conponents/Card2";

const Container = styled("div")`
  display: flex;
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
  background-color: #acccd7;
  border-radius: 5px;
  border: 1px solid black;
  color: black;
`;

const div = styled("img")`
  width: 50px;
  height: 50px;
`;

function Section() {
  return (
    <Container>
      <div>
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
      </div>
      <div>
        <img src={Photo} alt="" />
      </div>
    </Container>
  );
}

export default Section;
