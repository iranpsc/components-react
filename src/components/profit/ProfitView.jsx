import Button from "./Button";
import ProfitList from "./ProfitList";
import building from "../../assets/images/profile/building.png";
import education from "../../assets/images/profile/courthouse.png";
import house from "../../assets/images/profile/house.png";
import styled from "styled-components";
import { useState } from "react";

const Scroll = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
  overflow-y: auto;
  height: 230px;
  direction: ltr;
  padding-right: 15px;
  @media (min-width: 740px) {
    height: 215px;
  }
  @media (min-width: 840px) {
    height: 245px;
  }
  @media (min-width: 882px) {
    height: 200px;
  }
  @media (min-width: 890px) {
    height: 269px;
  }
  @media (min-width: 900px) {
    height: 285px;
  }
  @media (min-width: 910px) {
    height: 267px;
  }
  @media (min-width: 930px) {
    height: 285px;
  }
  @media (min-width: 1024px) {
    height: 573px;
  }
  @media (min-width: 1180px) {
    height: 625px;
  }
  @media (min-width: 1280px) {
    height: 600px;
  }
  @media (min-width: 1366px) {
    height: 715px;
  }
  @media (min-width: 1500px) {
    height: 580px;
  }
  @media (min-width: 1920px) {
    height: 720px;
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

  const sumHandler = ({ color, value, id }) => {
    const sameButtons = cards.filter((card) => card.color === color);
    const sumValues = sameButtons.reduce((pre, cur) => pre + cur.value, 0);
    const total = value + sumValues;
    const allIsZero = sameButtons.every((item) => item.value === 0);

    if (!allIsZero) {
      setButtons((prevButtons) =>
        prevButtons.map((button) => {
          if (button.value === value) {
            return { ...button, value: total };
          }
          return button;
        })
      );

      setCards((prevCards) =>
        prevCards.map((card) => {
          if (card.color === color) {
            return { ...card, value: 0 };
          }
          return card;
        })
      );
    }
  };

  const singleSumHandler = ({ color, value, id }) => {
    const mainButton = buttons.find((button) => button.color === color);
    const addedToMainButton = mainButton.value + value;

    setButtons((prevButtons) =>
      prevButtons.map((button) => {
        if (button.color === color) {
          return { ...button, value: addedToMainButton };
        }
        return button;
      })
    );

    setTimeout(() => {
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    }, 1500);
  };

  return (
    <Scroll>
      <Buttons>
        {buttons.map((button) => (
          <Button
            onClick={() => sumHandler(button)}
            key={button.id}
            {...button}
          />
        ))}
      </Buttons>
      <ProfitList
        cards={cards}
        // setCards={setCards}
        onClick={singleSumHandler}
      />
    </Scroll>
  );
};

export default ProfitView;
