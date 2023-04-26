import React from "reactstrap";
import styled from "styled-components";
import { IoIosCall } from "react-icons/io";
import { IoChatbubblesSharp, IoFolderOpenSharp } from "react-icons/io5";
import Photo from "./img/foto1.png";
import Photo2 from "./img/foto02.png";
import Photo3 from "./img/foto03.png";

const Div = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  background-color: F2F1EF;
  padding: 5rem;
`;

const Box = styled("div")`
  width: 350px;
`;

const Icon = styled("i")`
  color: orange;
  font-size: 40px;
`;

const UserName = styled("p")``;
const Location = styled("p")``;
const Worktime = styled("p")``;
const TellNum = styled("a")``;

const arr = [
  {
    icon: <IoIosCall />,
    name: "By Phone",
    tellNumber: "+998(71)245-11-11",
    location: "Uzbekistan",
    workTime: "Manday to Friday, 9am to 4pm",
  },
  {
    icon: <IoChatbubblesSharp />,
    name: "Start a new case",
    tellNumber: "+998(90)957-55-05",
    location: "Uzbekistan",
    workTime:
      "Just send us your questions or concerns by starting a new case and we will give you the help you need",
  },
  {
    icon: <IoFolderOpenSharp />,
    name: "Live Chat",
    tellNumber: "+998(90)133-55-05",
    location: "Uzbekistan",
    workTime: "Chat with a member of our in-house team",
  },
];

function Contact() {
  return (
    <Div>
      {arr.map((data, index) => (
        <Box key={index}>
          <Icon>{data.icon}</Icon>
          <UserName>{data.name}</UserName>
          <Location>{data.location}</Location>
          <Worktime>{data.workTime}</Worktime>
          <TellNum href={`tel:${data.tellNumber}`}>{data.tellNumber}</TellNum>
        </Box>
      ))}
    </Div>
  );
}

export default Contact;
