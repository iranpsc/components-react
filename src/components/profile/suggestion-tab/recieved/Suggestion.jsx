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
 gap: 60px;
  @media (min-width: 840px) {
    gap: 120px;
  }
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
  stroke-width: 1;
  transform: ${(props) =>
    props.hasXGreaterThan50 ? "rotate(250deg)" : "rotate(270deg)"};
`;

const Suggestion = ({ id, property, suggestions_list, onRejectProposal }) => {
  const xCoords = property.coordinates.map((coord) => coord.x);
  const yCoords = property.coordinates.map((coord) => coord.y);

  const minX = Math.min(...xCoords);
  const maxX = Math.max(...xCoords);
  const minY = Math.min(...yCoords);
  const maxY = Math.max(...yCoords);

  const hasXGreaterThan50 = xCoords.some((x) => x > 50);

  const normalizedPoints = property.coordinates
    .map((coord) => {
      const normalizedX =
        coord.x > 50
          ? ((coord.x - minX) / (maxX - minX)) * 40
          : ((coord.x - minX) / (maxX - minX)) * 100;
      const normalizedY =
        coord.x > 50
          ? ((coord.y - minY) / (maxY - minY)) * 140
          : ((coord.y - minY) / (maxY - minY)) * 100;
      return `${normalizedX},${normalizedY}`;
    })
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
            <StyledSVG
              viewBox={` ${hasXGreaterThan50 ? -15 : -30} ${
                hasXGreaterThan50 ? -85 : -110
              } 150 ${hasXGreaterThan50 ? 100 : 120}`}
            >
              <Polygon
                hasXGreaterThan50={hasXGreaterThan50}
                points={normalizedPoints}
              />
            </StyledSVG>
          </AreaContainer>
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
