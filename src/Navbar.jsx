import React from "react";
import styled from "styled-components";
import RentLogo from "./Rent.png";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import { Link } from "react-router-dom";
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
      <Link to="/section">Home</Link>
      <Link to="/arenda">Arenda</Link>
      <NavLink to="/">
        Buy
      </NavLink>
      <Link to="/contact">
        Contact
      </Link>
      <Link to="/login">
        Log In
      </Link>
    </Container>
  );
}

export default Navbar;
