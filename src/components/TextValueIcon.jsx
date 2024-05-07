import styled from "styled-components";

const Item = styled.div`
  border-radius: 5px;
  border: 1px solid #454545;
  display: flex;
  flex-grow: 1;
  align-items: center;
  overflow: hidden;
  height: 48px !important;
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

const Title = styled.div`
  color: #dedee9;
  font-size: 16px;
  font-weight: 400;
  line-height: ${(props) => props.long && "20px"};
  @media (max-width: 1024px) and (min-height: 600px) {
    font-size: ${(props) => (props.long ? "12px" : "16px")};
  }
`;

const Value = styled.span`
  color: #dedee9;
  font-size: 12px;
  font-weight: 400;
  padding: 10px 15px;
  @media (min-width: 460px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) and (min-height: 600px) {
    font-size: 14px;
  }
`;
const TextValueIcon = ({ icon, title, value, long }) => {
  return (
    <Item>
      <InfoIcon>
        {icon}
        <Title long={long}>{title}</Title>
      </InfoIcon>
      <Value>{value}</Value>
    </Item>
  );
};

export default TextValueIcon;
