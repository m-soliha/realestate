
import Photo from "./img/arenda.foto.png";
import Photo2 from "./img/arenda.foto2.png";
import styled from "styled-components";
const Div = styled("div")`
  width: 60rem;
  height: 40rem;
`;

const IMG = styled("img")`
  margin-top: 3rem;
  margin-left: -50rem;
  height: 330px;
  width: 180px;
`;
const H1 = styled("h1")`
  margin-top: -17rem;
  margin-left: 15rem;
`;
const H5 = styled("h5")`
    margin-top: 9rem;
`;
const SOS = styled("img")`
    margin-left: -10rem;
    margin-top: 1rem;
`;
const H6 = styled("h6")`
    margin-top: -5rem;
    margin-left: 25rem;
`;
function SectionHelp() {
  return (
    <Div>
      <IMG src={Photo} alt="" />
      <H1>Удобный поиск по карте в <br></br> мобильном приложении «Rent»</H1>
      <SOS src={Photo2} alt="" style={{ width: "14rem", height: "7rem" }} />
      <H6> - Обведите на карте нужный район
        <br></br>
        <br></br>
        - Выберите лучшее предложение
        </H6>
       
      <H5>Агенство недвижимости Этажи в Ташкенте</H5>
      <h6>Ищете надежные риэлторские агентства Ташкента? Обратитесь в Этажи. Мы предоставляем комплексное риэлторское, юридическое сопровождение и консультации по ипотеке. Компания оказывает услуги на рынке РФ и СНГ с 2000 года.</h6>
      <h6>Официальный сайт агентства недвижимости Этажи позволяет удобно выбирать квартиры.</h6>
      <h6>Мало какая риэлторская фирма может сравниться по количеству объявлений в базе, организации работы с применением ИТ и качеству обслуживания. Вы можете посмотреть отзывы клиентов о специалистах компании и их рейтинг. </h6>
      <h6>Свяжитесь с нами любым удобным способом. Например, позвоните или оставьте свой номер телефона — перезвоним в ближайшее время. Адрес и телефон указаны на странице контактов.</h6>
    </Div>
  );
}
export default SectionHelp;
