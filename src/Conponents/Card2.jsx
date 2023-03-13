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
      }}
    >
      <img alt="Sample" src={img} />
      <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {cost} сумм в месяц
        </CardSubtitle>
        <CardText>дом</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
}
export default CardMain;
