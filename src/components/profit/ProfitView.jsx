import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import ProfitList from "./ProfitList";
import building from "../../assets/images/profile/building.png";
import education from "../../assets/images/profile/courthouse.png";
import house from "../../assets/images/profile/house.png";
import styled from "styled-components";

const Scroll = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
  overflow-y: auto;
  height: calc(100% - 115px);
  direction: ltr;
  padding-right: 15px;
  @media (min-width: 1024px) {
    height: calc(100% - 170px);
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
  {
    id: 8,
    title: "ملک تجاری",
    logo: building,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#FF0000",
    background: "#ff000021",
  },
  {
    id: 9,
    title: "ملک آموزشی",
    logo: education,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#0066FF",
    background: "#0066ff21",
  },
  {
    id: 10,
    title: "ملک مسکونی",
    logo: house,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#FFC700",
    background: "#ffc80021",
  },
  {
    id: 11,
    title: "ملک مسکونی",
    logo: house,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#FFC700",
    background: "#ffc80021",
  },
  {
    id: 12,
    title: "ملک مسکونی",
    logo: house,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#FFC700",
    background: "#ffc80021",
  },
  {
    id: 13,
    title: "ملک آموزشی",
    logo: education,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#0066FF",
    background: "#0066ff21",
  },
  {
    id: 14,
    title: "ملک تجاری",
    logo: building,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#FF0000",
    background: "#ff000021",
  },
  {
    id: 15,
    title: "ملک تجاری",
    logo: building,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#FF0000",
    background: "#ff000021",
  },
  {
    id: 16,
    title: "ملک آموزشی",
    logo: education,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#0066FF",
    background: "#0066ff21",
  },
  {
    id: 17,
    title: "ملک مسکونی",
    logo: house,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#FFC700",
    background: "#ffc80021",
  },
  {
    id: 18,
    title: "ملک مسکونی",
    logo: house,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#FFC700",
    background: "#ffc80021",
  },
  {
    id: 19,
    title: "ملک مسکونی",
    logo: house,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#FFC700",
    background: "#ffc80021",
  },
  {
    id: 20,
    title: "ملک آموزشی",
    logo: education,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#0066FF",
    background: "#0066ff21",
  },
  {
    id: 21,
    title: "ملک تجاری",
    logo: building,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#FF0000",
    background: "#ff000021",
  },
  {
    id: 22,
    title: "ملک مسکونی",
    logo: house,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#FFC700",
    background: "#ffc80021",
  },
  {
    id: 23,
    title: "ملک آموزشی",
    logo: education,
    code: "QA31-11213",
    value: 3.24,
    date: "۲۲ اردیبهشت ۱۴۰۲",
    color: "#0066FF",
    background: "#0066ff21",
  },
  {
    id: 24,
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

  const sumHandler = ({ color, value }) => {
    const sameButtons = cards.filter((card) => card.color === color);
    const allIsZero = sameButtons.every((item) => item.value === 0);

    if (!allIsZero) {
      setButtons((prevButtons) =>
        prevButtons.map((button) => {
          if (button.value === value) {
            return { ...button, value: 0 };
          }
          return button;
        })
      );

      setCards((prevCards) => prevCards.filter((card) => card.color !== color));
    }
  };

  const singleSumHandler = ({ color, value, id }) => {
    const mainButton = buttons.find((button) => button.color === color);
    const addedToMainButton = mainButton.value - value;

    setButtons((prevButtons) =>
      prevButtons.map((button) => {
        if (button.color === color) {
          return { ...button, value: addedToMainButton };
        }
        return button;
      })
    );
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    setTimeout(() => {
    }, 1050);
  };

  return (
    <Scroll>
      <Buttons>
        {buttons.map((button) => (
          <Button
            onClick={() => sumHandler(button)}
            key={button.id}
            cards={cards}
            {...button}
          />
        ))}
      </Buttons>
      <ProfitList cards={cards} onClick={singleSumHandler} />
    </Scroll>
  );
};

export default ProfitView;
