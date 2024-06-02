import styled from "styled-components";

const TitleName = styled.h3`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  direction: ${props => props.right && 'rtl'};
  margin-top: ${props => props.payed && '30px'};
`;
const Title = ({ title, payed, right }) => {
  return <TitleName right={right} payed={payed}>{title}</TitleName>;
};

export default Title;
