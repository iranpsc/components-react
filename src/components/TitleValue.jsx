import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  border-radius: 5px;
  height: 48px;
  border: 1px solid gray;
  font-weight: 400;
  color: #dedee9;
  overflow: hidden;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  height: fit-content;
  background-color: #1a1a18;
  padding: 8px 20px;
`;

const Value = styled.p`
  font-size: 18px;
  padding: 8px 20px;
`;

const TitleValue = ({ title, value }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Wrapper>
  );
};

export default TitleValue;
