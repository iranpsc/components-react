import ConfettiExplosion from "react-confetti-explosion";
import { convertToPersian } from "../../lib/convertToPersian";
import styled from "styled-components";
import { useState } from "react";

const Card = styled.div`
  border-radius: 5px;
  background-color: #1a1a18;
  padding: 20px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #454545;
  padding-bottom: 10px;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    h3 {
      font-size: 13px;
      color: #dedee9;
      font-weight: 400;
    }
    h2 {
      font-size: 16px;
      color: #ffc700;
      font-weight: 600;
    }
  }
`;
const Image = styled.div`
  border-radius: 5px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
`;
const Value = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  width: 122px;
  height: 50px;
  border-radius: 10px;
  border-bottom: 2px solid ${(props) => props.color};
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  transform: rotateX(15deg);
  box-shadow: 0px 15px 30px -20px ${(props) => props.color};
  span {
    font-size: 16px;
  }
`;
const Footer = styled.span`
  font-size: 13px;
  color: #a0a0ab;
  font-weight: 500;
  display: flex;
  gap: 5px;
  padding-top: 7px;
  h4 {
    color: #dedee9;
    font-size: 13px;
    font-weight: 400;
  }
`;
const ProfitCard = ({
  background,
  logo,
  title,
  code,
  color,
  value,
  date,
  onclick,
}) => {
  const [isExploding, setIsExploding] = useState(false);

  return (
    <Card>
      <Content>
        <Info>
          <Image color={background}>
            <img src={logo} alt={title} />
          </Image>
          <div>
            <h3>{title}</h3>
            <h2>{code}</h2>
          </div>
        </Info>
        <Value
          onClick={() => {
            setIsExploding(!isExploding);
            onclick();
          }}
          color={color}
          background={background}
        >
          {isExploding && (
            <ConfettiExplosion
              particleSize={5}
              width={400}
              height={"80vh"}
              colors={[`${color}`]}
            />
          )}
          <span>{convertToPersian(value)}</span>
        </Value>
      </Content>
      <Footer>
        آخرین زمان جمع آوری: <h4>{date}</h4>{" "}
      </Footer>
    </Card>
  );
};

export default ProfitCard;
