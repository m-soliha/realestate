import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import styled from "styled-components";

const CardContainer = styled("div")`
  display: flex;
  overflow-x: scroll;
  /* flex-direction: column; */
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
      title: "Все о работе",
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/content/media/site/31/f2/0ba8c96925c182e135702637dd921773285f7671.jpg",
      title: "Мобильные приложения",
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/content/media/site/6e/6e/2a6cf3682fdee22759bbc5f786e0d430aca6f756.jpg",
      title: "Получайте скидки от партнёров",
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/content/media/site/1c/ea/bd/cfeacbe876d98de500a1bde2bbd442a0ea301b79.jpg",
      title: "<Этажи> в цифрах",
    },
    {
      imgUrl:
        "https://cdn.esoft.digital/content/media/site/c8/b5/8f/4f10bccc9f6efcbdfd0e6d594674e6d381127d68.jpg",
      title: "Купи франшизу №1 в сфере недвижимости",
    },
  ];

  return (
    <div>
      <h1>Приемущества для вас</h1>
      <CardContainer>
        {arr.map((d) => (
          <Card
            style={{
              width: "18rem",
              margin: "1rem",
            }}
          >
            <img alt="Sample" src={d.imgUrl} />
            <CardBody>
              <CardTitle tag="h5">{d.title}</CardTitle>
            </CardBody>
          </Card>
        ))}
      </CardContainer>
    </div>
  );
}

export default SectionHelper;
