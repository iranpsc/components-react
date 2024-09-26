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
  gap: 10px;
  justify-content: space-between;
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1366px) {
    gap: 120px;
    width: auto;
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
  padding: 20px 0;
`;
const Owner = styled.div`
  p {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 600;
  }
  a {
    text-decoration: none;
    color: #0066ff;
    font-size: 16px;
    font-weight: 500;
    margin-top: 4px;
  }
`;

const Time = styled.div`
  p {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 600;
  }
  h3 {
    color: #dedee9;
    font-size: 18px;
    font-weight: 500;
    margin-top: 4px;
  }
  @media (min-width: 1366px) {
    margin-left: 70px;
  }
`;

const AreaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #2c2c2c;
  border-radius: 6px;
  position: relative;
  background-image: url(${vector});
  background-size: cover;
`;

const StyledSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const Polygon = styled.polygon`
  fill: white;
  stroke-width: 2;
`;

const Suggestion = ({ id, property, suggestions_list, onRejectProposal }) => {
  const points = property.coordinates
    .map((coord) => `${coord.x},${coord.y}`)
    .join(" ");

  const transitions = useTransition(suggestions_list, {
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
  });
  return (
    <Container>
      <Property>
        <Location>
          <AreaContainer>
            <StyledSVG>
              <Polygon points={points} />
            </StyledSVG>
          </AreaContainer>
          <div>
            <p>{property.location}</p>
            <h3>{property.code}</h3>
          </div>
        </Location>
        <Pricing>
          <Owner>
            <div>
              <p>صاحب ملک</p>
              <a href="https://rgb.irpsc.com/fa/citizen/hm-2000001">
                {property.owner}
              </a>
            </div>
          </Owner>
          <Value>
            <h2>ارزش پایه</h2>
            <div>
              <img width={24} height={24} src={red} />
              <span>{property.value}</span>
            </div>
          </Value>
          <Time>
            <div>
              <p>تاریخ ثبت پیشنهاد</p>
              <h3>{property.date}</h3>
            </div>
          </Time>
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
