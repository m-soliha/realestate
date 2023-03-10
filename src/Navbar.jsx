import React from "react";
import styled from "styled-components";
import RentLogo from "./Rent.png";
const Container = styled("div")`
  display: flex;
  justify-content: space-evenly;
  background-color: #f9f9f9;
`;
const Navitem = styled("h2")`
  font-size: 17px;  
`;
const Logo = styled("img")`
  width: 50px;
  height: 50px;
`;
function Navbar() {
  return (
    <Container>
      <Logo src={RentLogo} />
      <Navitem to="/">Home</Navitem>
      <Navitem to="/">Arenda</Navitem>
      <Navitem to="/">Buy</Navitem>
      <Navitem to="/">Contact</Navitem>
      <Navitem to="/Login">Log in</Navitem>
    </Container>
  );
}

export default Navbar;
