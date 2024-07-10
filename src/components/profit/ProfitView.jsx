import ProfitList from "./ProfitList";
import building from "../../assets/images/profile/building.png";
import education from "../../assets/images/profile/courthouse.png";
import house from "../../assets/images/profile/house.png";
import styled from "styled-components";
import { useState } from "react";

const TabsWrapper = styled.div`
  border-bottom: 1px solid #454545;
  justify-content: flex-start;
  display: flex;
`;

const TabItem = styled.div`
  padding: 8px 26px;
  width: 20%;
  border-bottom: 2px solid #ffc700;
`;

const Container = styled.div``;
const Scroll = styled.div`
padding-top: 30px;
padding-bottom: 10px;
overflow-y: auto;
height: 270px;
direction: ltr;
padding-right: 15px;
@media (min-width: 740px) {
    height: 255px;
}
@media (min-width: 840px) {
    height: 285px;
}
@media (min-width: 890px) {
    height: 309px;
}
@media (min-width: 900px) {
    height: 325px;
}
@media (min-width: 910px) {
    height: 307px;
}
@media (min-width: 1024px) {
    height: 613px;
}
@media (min-width: 1180px) {
    height: 665px;
}
@media (min-width: 1280px) {
    height: 697px;
}
@media (min-width: 1366px) {
    height: 870px;
}
@media (min-width: 1500px) {
    height: 620px;
}
@media (min-width: 1920px) {
    height: 760px;
}
`;
const Button = styled.div`
  padding: 10px;
  flex-grow: 1;
  border-radius: 10px;
  border-bottom: 2px solid ${(props) => props.color};
  background-color: ${(props) =>
    props.id === 1 ? "#ff000021" : props.id === 2 ? "#ffc80021" : "#0066ff21"};
  box-shadow: ${(props) =>
    props.id === 1
      ? "0px 10px 35px -10px #ff000066"
      : props.id === 2
      ? "0px 15px 30px -15px #FFC70080"
      : "0px 15px 30px -15px #0066FF80"};

  span {
    color: #dedee9;
    font-size: 13px;
    font-weight: 400;
  }
  h3 {
    font-size: 15px;
    font-weight: 600;
    color: ${(props) => props.color};
  }
  div {
    display: flex;
    gap: 6px;
    margin-top: 2px;
  }
`;
const Buttons = styled.div`
direction: rtl;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const buttons_items = [
  {
    id: 1,
    title: "سود املاک تجاری",
    logo: building,
    value: 82.2,
    color: "#FF0000",
  },
  {
    id: 2,
    title: "سود املاک مسکونی",
    logo: house,
    value: 291.09,
    color: "#FFC700",
  },
  {
    id: 3,
    title: " سود املاک آموزشی",
    logo: education,
    value: 4.21,
    color: "#0066FF",
  },
];

const cards_items = [
  {
    id: 1,
    title: "ملک تجاری",
    logo: building,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#FF0000",
    background: "#ff000021",
  },
  {
    id: 2,
    title: "ملک آموزشی",
    logo: education,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#0066FF",
    background: "#0066ff21",
  },
  {
    id: 3,
    title: "ملک مسکونی",
    logo: house,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#FFC700",
    background: "#ffc80021",
  },
  {
    id: 4,
    title: "ملک مسکونی",
    logo: house,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#FFC700",
    background: "#ffc80021",
  },
  {
    id: 5,
    title: "ملک مسکونی",
    logo: house,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#FFC700",
    background: "#ffc80021",
  },
  {
    id: 6,
    title: "ملک آموزشی",
    logo: education,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#0066FF",
    background: "#0066ff21",
  },
  {
    id: 7,
    title: "ملک تجاری",
    logo: building,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#FF0000",
    background: "#ff000021",
  },
];

const ProfitView = () => {
  const [buttons, setButtons] = useState(buttons_items);
  const [cards, setCards] = useState(cards_items);
  return (
    <Container>
      <TabsWrapper>
        <TabItem />
      </TabsWrapper>
      <Scroll>
        <Buttons>
          {buttons.map((button) => (
            <Button id={button.id} color={button.color} key={button.id}>
              <span>{button.title}</span>
              <div>
                <img
                  width={24}
                  height={24}
                  src={button.logo}
                  alt={button.title}
                />
                <h3>{button.value}</h3>
              </div>
            </Button>
          ))}
        </Buttons>
        <ProfitList cards={cards} />
      </Scroll>
    </Container>
  );
};

export default ProfitView;
