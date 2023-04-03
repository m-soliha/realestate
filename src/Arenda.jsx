import CardMain from "./Conponents/Card2";
import styled from "styled-components";
import ReactHlsPlayer from "react-hls-player";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const CardContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 2px solid black;
  margin: 2rem;
  padding: 1rem;
`;
const VideoContainer = styled("div")`
  display: flex;
  background-color: light;
  width: 100%;
`;

function Arenda() {
  const arr = [
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/b8/3f/b47b860ae915ac4d8d6c5168b1399c1bcae93fb8.jpeg",
      cost: 25300010,
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
        "https://cdn.esoft.digital/320240/cluster/photos/f6/5b/7e859223df24a6e61ed6c316938a20dd3e545bf6.jpeg",
      cost: 22000000,
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
        "https://cdn.esoft.digital/320240/cluster/photos/ef/45/904e856fb756dba687fcd8d0124f110fd16b45ef.jpeg",
      cost: 28700000,
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/d1/11/775656518b451d35594d5baa247a58ac762711d1.jpeg",
      cost: 28700000,
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/6a/c6/d26c112279190cb2c115f0b386b5841b16a1c66a.jpeg",
      cost: 44000000,
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/a7/98/349111386c2cc5202305f040c644a750287298a7.jpeg",
      cost: 22000000,
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/b3/97/4966766b741f6183c3bacd5d76f82b4b6cc697b3.jpeg",
      cost: 45400000,
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/4d/72/f04f39f62838c3b8c0a161a368bb491c03e6724d.jpeg",
      cost: 16600000,
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/14/e7/3dc6cac3423c7e29e0cb331fec3e5fda0329e714.jpeg",
      cost: 56000000,
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/3e/81/87140127744936a4ae26544e57c2022d937a813e.jpeg",
      cost: 21700000,
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/8b/63/cfd4c7b98d2813afef45b782098dcb3b758c638b.jpeg",
      cost: 38500000,
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/320240/cluster/photos/09/e7/907f09bdd9e234b09605e4f49661fa76c184e709.jpeg",
      cost: 56000000,
    },
  ];
  const videoData = [
    {
      link: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    },
    {
      link: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    },
    {
      link: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    },
  ];
  return (
    <Container>
      <CardContainer>
        {arr.map((d) => (
          <CardMain img={d.imgUrl} cost={d.cost} />
        ))}
      </CardContainer>
      <VideoContainer>
        {videoData.map((d) => (
          <div style={{ display: "flex", padding: "1rem", width: "500px" }}>
            <ReactHlsPlayer
              src={d.link}
              autoPlay={false}
              controls={true}
              width="100%"
              height="300px"
            />
          </div>
        ))}
      </VideoContainer>
    </Container>
  );
}

export default Arenda;
