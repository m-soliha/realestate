import React from "react";
import styled from "styled-components";
import RentLogo from "./Rent.png";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import { Link } from "react-router-dom";
const Container = styled("div")`
  display: flex;
  justify-content: space-evenly;
  background-color: #f9f9f9;
  padding: 1rem;
`;
const Navitem = styled("h2")`
  font-size: 17px;
`;

const NAVLINK = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Logo = styled("img")`
  width: 70px;
  height: 70px;
`;
function Navbar() {
  return (
    <Container>
      <Logo src={RentLogo} />
      <NAVLINK to="/">Home</NAVLINK>
      <NAVLINK to="/arenda">Rent</NAVLINK>
      <NAVLINK to="/buy">Buy</NAVLINK>
      <NAVLINK to="/contact">Contact</NAVLINK>
      <NAVLINK to="/login">Log In</NAVLINK>
    </Container>
  );
}

export default Navbar;
