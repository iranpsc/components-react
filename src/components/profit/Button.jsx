import ConfettiExplosion from "react-confetti-explosion";
import { convertToPersian } from "../../lib/convertToPersian";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  padding: 10px;
  cursor: pointer;
  flex-grow: 1;
  position: relative;
  border-radius: 10px;
  transform: rotateX(15deg);
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
const Button = ({ id, color, title, value, logo, onClick, cards }) => {
  const [isExploding, setIsExploding] = useState(false);

  const sameButtons = cards.filter((card) => card.color === color);
  const sumValues = sameButtons.reduce((pre, cur) => pre + cur.value, 0);
  console.log(sumValues);

  return (
    <Container
      id={id}
      color={color}
      onClick={() => {
        setIsExploding(!isExploding);
        onClick();
      }}
    >
      {isExploding && (
        <ConfettiExplosion
          style={{ position: "absolute", top: "50px", left: "70px" }}
          particleSize={5}
          width={400}
          height={"90vh"}
          colors={[`${color}`]}
        />
      )}
      <span>{title}</span>
      <div>
        <img width={24} height={24} src={logo} alt={title} />
        <h3>{convertToPersian(sumValues.toFixed(2))}</h3>
      </div>
    </Container>
  );
};

export default Button;
