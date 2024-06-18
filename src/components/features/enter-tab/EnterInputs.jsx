import Input from "./Input";
import styled from "styled-components";

const Select = styled.select`
  color: #dedee9;
  background-color: black;
  border: none !important;
  outline: none !important;
  font-size: 12px;
  font-weight: 400;
  padding: 10px 15px;
  padding-left: 15px;
  width: 100%;
  option {
    color: #dedee9;
    padding-left: 15px;
    width: 100%;
    border: transparent !important;
    outline: none !important;
    color: #dedee9;
    background-color: transparent !important;
  }
  @media (min-width: 460px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    font-size: "16px";
  }
`;

const Item = styled.div`
  border-radius: 5px;
  border: 1px solid #454545;
  display: flex;
  flex-grow: 1;
  align-items: center;
  overflow: hidden;
  height: 48px !important;
  order: 3;
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  gap: 10px;
  border-left: 1px solid #454545;
  background-color: #1a1a18;
  padding: 10px;
  height: 100%;
  @media (min-width: 1024px) and (min-height: 600px) {
    svg {
      font-size: 26px !important;
    }
  }
  svg {
    font-size: 20px;
    color: #dedee9;
  }
`;

const Title = styled.p`
  color: #dedee9;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;
const Wrapper = styled.div`
  display: grid;
  margin-top: 25px;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
const EnterInputs = ({ data }) => {
  return (
    <Wrapper>
      {data[0]?.inputs?.slice(0, 3).map((input) => (
        <Input {...input} key={input.id} />
      ))}
      <Item>
        <InfoIcon>
          {data[0].inputs[3]?.icon}
          <Title>{data[0].inputs[3]?.title}</Title>
        </InfoIcon>
        <Select>
          {data[0].inputs[3]?.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </Select>
      </Item>
    </Wrapper>
  );
};

export default EnterInputs;
