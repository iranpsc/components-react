import Proposer from "./Proposer";
import line from "../../../../assets/images/profile/Line.png";
import psc from "../../../../assets/images/profile/psc.gif";
import red from "../../../../assets/images/profile/red-color.gif";
import rial from "../../../../assets/images/profile/rial.gif";
import styled from "styled-components";

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

const Suggestion = ({ property, suggestions_list }) => {
  return (
    <Container>
      <Property>
        <Location>
          <img
            src={property.image}
            alt={property.location}
            width={100}
            height={100}
          />
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
        {suggestions_list.map((suggestion) => (
          <Proposer key={suggestion.id} {...suggestion} />
        ))}
      </Suggestions>
    </Container>
  );
};

export default Suggestion;
