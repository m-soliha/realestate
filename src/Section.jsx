import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Photo from "./img/react.png";
import Card from "./Conponents/Card2";
import Photo2 from "./img/fone.png";
import SectionHelper from "./SectionHelper";
import SectionHelp from "./SectionHelp";
import { getDocs, collection, doc } from "firebase/firestore";
import { db } from "./config";

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
  margin: 15px;
`;

const IMG = styled("img")`
  width: 27rem;
  height: 27rem;
  margin-top: -1rem;
  margin-left: 5rem;
`;

function Section() {
  const [info, setInfo] = useState([]);
  const aboutMe = collection(db, "items");
  useEffect(() => {
    const getInfo = async () => {
      const data = await getDocs(aboutMe);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(123);
    };
    getInfo();
  }, []);
  console.log(123423);

  return (
    <Container>
      <div
        style={{ display: "flex", border: "1px solid black", padding: "3rem" }}
      >
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
      <SectionHelp />
    </Container>
  );
}

export default Section;
