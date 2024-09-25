import { animated, useTransition } from "react-spring";

import Proposer from "./Proposer";
import line from "../../../../assets/images/profile/Line.png";
import psc from "../../../../assets/images/profile/psc.gif";
import red from "../../../../assets/images/profile/red-color.gif";
import rial from "../../../../assets/images/profile/rial.gif";
import styled from "styled-components";
import vector from "../../../../assets/images/profile/Vector.png";

const Container = styled.div`
  background-color: #1a1a18;
  padding: 10px;
  border-radius: 5px;
  direction: rtl;
`;

const Property = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 10px;
  @media (min-width: 1366px) {
    flex-direction: row;
    align-items: center;
  }
`;
const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  p {
    color: #dedee9;
    font-size: 16px;
    font-weight: 600;
  }
  h3 {
    color: #ffc700;
    font-size: 14px;
    font-weight: 500;
    margin-top: 4px;
  }
`;
const Pricing = styled.div`
  display: flex;
  align-items: center;
  gap: 120px;
`;
const Price = styled.div`
  h2 {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 600;
  }
`;
const Prices = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 70px;
  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  span {
    color: #dedee9;
    font-size: 18px;
    font-weight: 500;
  }
`;
const Value = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  h2 {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 600;
  }
  span {
    color: #dedee9;
    font-size: 18px;
    font-weight: 500;
  }
`;
const Suggestions = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`;
const Meter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2c2c2c;
  border-radius: 6px;
  position: relative;
  width: 100px;
  height: 100px;
  background-image: url(${vector});
  background-size: cover;
`;

const DynamicDiv = styled.div`
  position: absolute;
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 12px;
  font-weight: bold;
  z-index: 10;
`;
const Suggestion = ({
  id,
  property,
  suggestions_list,
  onRejectProposal,
  x,
  y,
  z,
  t,
}) => {
  const transitions = useTransition(suggestions_list, {
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
  });

  return (
    <Container>
      <Property>
        <Location>
          <Meter>
            <DynamicDiv
              x={parseFloat(x)}
              y={parseFloat(y)}
              z={parseFloat(z)}
              t={parseFloat(t)}
            />
          </Meter>
          <div>
            <p>{property.location}</p>
            <h3>{property.code}</h3>
          </div>
        </Location>
        <Pricing>
          <Value>
            <h2>ارزش پایه</h2>
            <div>
              <img width={24} height={24} src={red} />
              <span>{property.value}</span>
            </div>
          </Value>
          <Price>
            <h2>قیمت خریداری شده</h2>
            <Prices>
              <div>
                <img width={24} height={24} src={rial} />
                <span>{property.rial}</span>
              </div>
              <img width={1} height={24} src={line} />
              <div>
                <img width={24} height={24} src={psc} />
                <span>{property.psc}</span>
              </div>
            </Prices>
          </Price>
        </Pricing>
      </Property>
      <Suggestions>
        {transitions((style, item) => (
          <animated.div key={item.id} style={style}>
            <Proposer
              {...item}
              onReject={() => onRejectProposal(id, item.id)}
            />
          </animated.div>
        ))}
      </Suggestions>
    </Container>
  );
};

export default Suggestion;
