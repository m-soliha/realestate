import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";


function CardMain({ img, cost }) {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "2rem",
        borderRadius: "1rem",
        backgroundColor:"rgb(242,242,237)",
        border: "2px solid black",
      }}
    >
      <img alt="Sample" src={img} />
      <CardBody>
        <CardTitle tag="h5">Аренда дома <br></br>Цена</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {cost}
        </CardSubtitle>
        <CardText>В месяц</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
}
export default CardMain;
