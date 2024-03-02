import styled from "styled-components";

const ButtonElement = styled.button`
  border-radius: 10px;
  background-color: #ffc700;
  width: 112px;
  height: 50px ;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  color: #191b21;
  font-family: inherit;
`;

const Button = ({ label, onclick }) => {
  return <ButtonElement onClick={onclick}>{label}</ButtonElement>;
};

export default Button;
