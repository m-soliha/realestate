import CardMain from "./Conponents/Card2";
import styled from "styled-components";

const Container = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
function Arenda() {
  const arr = [
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/b8/3f/b47b860ae915ac4d8d6c5168b1399c1bcae93fb8.jpeg",
      cost: 25300000,
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/84/a6/5b6c6234389c01ff69da3149ca3e93dd1759a684.jpeg",
      cost: 45400000,
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/6c/b6/1b4a28d7689e7d80ae501672560a1ef22849b66c.jpeg",
        cost: 33000000,
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/41/c3/0e05d64695ad8168a8c07535f682af5e67b7c341.jpeg",
        cost: 56000000,
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/38/ff/fbec3351e5cb1450dfc4dd4bee7d605b9fd2ff38.jpeg",
        cost: 14500000,
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/33/b1/d0f86d9eefdf7be1d509e7edead868bea6acb133.jpeg",
        cost: 20000000,
    },
  ];
  return (
    <Container>
      {arr.map((d) => (
        <CardMain img={d.imgUrl} cost={d.cost} />
      ))}
    </Container>
  );
}

export default Arenda;
