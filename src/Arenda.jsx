import CardMain from "./Conponents/Card2";
import styled from "styled-components";

const Container = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 2px solid black;
  margin: 2rem;
  padding: 1rem;
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
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/eb/b7/a24f0dbee5cc3098ddec748debec87f0fcb2b7eb.jpeg",
      cost: 28700000,
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/70/d0/9e792e1c44e07256a87bc65294ca0b5afdded070.jpeg",
      cost: 16600000,
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/f6/5b/7e859223df24a6e61ed6c316938a20dd3e545bf6.jpeg",
      cost: 22000000,
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
