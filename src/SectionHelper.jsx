import styled from "styled-components";

const CardContainer = styled("div")`
  display: flex;
  padding: 10px;
  display: flex;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  width: 100%;
  align-items: center;
  scroll-behavior: smooth;
  border-radius: 10px;
  gap: 10px;
  /* flex-direction: column; */
  `;

const Card = styled("div")`
padding: 10px;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  background-color: #ececec;
  :hover{
    transform: scale(104%, 104%);
  }
  transition: all 0.3s;
`;



const CardTitle = styled("div")`
  width: 250px;
`;

const H1 = styled("h1")`
  padding: 2rem;
`;

function SectionHelper() {
  const arr = [
    {
      imgUrl:
        "https://cdn.esoft.digital/content/cluster/media/66/027d5c1af3efd18fee09dff51f9cd7aa0256f666.png",
      title: "В любую точку мира вместе с нами",
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/content/cluster/media/50/40f4de8ef0aa05b7c3f99c49d902b906a29f3c50.png",
      title: "Все о работе в «Rent»",
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/content/media/site/31/f2/0ba8c96925c182e135702637dd921773285f7671.jpg",
      title: "Мобильные приложения «Rent»",
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/content/media/site/6e/6e/2a6cf3682fdee22759bbc5f786e0d430aca6f756.jpg",
      title: "Получайте скидки от партнёров",
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/content/media/site/1c/ea/bd/cfeacbe876d98de500a1bde2bbd442a0ea301b79.jpg",
      title: "«Rent» в цифрах",
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/content/media/site/1c/ea/bd/cfeacbe876d98de500a1bde2bbd442a0ea301b79.jpg",
      title: "«Rent» в цифрах",
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/content/media/site/1c/ea/bd/cfeacbe876d98de500a1bde2bbd442a0ea301b79.jpg",
      title: "«Rent» в цифрах",
    },

  ];

  return (
    <div>
      <H1>Приемущества для вас</H1>
      <CardContainer>
        {arr.map((d) => (
          <Card>
            <img alt="Sample" src={d.imgUrl} style={{ height: "200px",width:"150px" ,borderRadius:"8px"}} />
              <CardTitle tag="h5">{d.title}</CardTitle>
          </Card>
        ))}
      </CardContainer>
    </div>
  );
}

export default SectionHelper;
