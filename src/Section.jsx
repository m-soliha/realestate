import React from "react";
import styled from "styled-components";
import Photo from "./img/foto1.png";
import Card from "./Conponents/Card2";
import Photo2 from "./img/fone.png";
import SectionHelper from "./SectionHelper";
const Container = styled("div")`
  display: flex;
  margin: 4rem;
  flex-direction: column;
  color: black;
  font-size: 20px;
  background-size: 100% 90%;
  padding: 3rem;
`;
const P = styled("p")`
  color: grey;
`;
const Input = styled("input")``;
const Buttonn = styled("button")`
  background-color: #acccd7;
  border-radius: 5px;
  color: black;
`;

const IMG = styled("img")`
  width: 32rem;
  height: 35rem;
  margin-top: -3rem;
  margin-left: 5rem;
`;

function Section() {
  return (
    <Container>
      <div style={{ display: "flex", border: "1px solid black" }}>
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
            confortable prices for our client so don't delay
          </P>
          <div>
            <Input placeholder="Search by location" />
            <Buttonn>Search</Buttonn>
          </div>
        </div>
        <div>
          <IMG src={Photo} alt="" />
        </div>
      </div>
      <SectionHelper />
    </Container>
  );
}

export default Section;
