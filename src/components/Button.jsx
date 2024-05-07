import styled from "styled-components";

const ButtonElement = styled.button`
  border-radius: 10px;
  background-color: #ffc700;
  border: none;
  width: 112px;
  height: 45px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  color: #191b21;
  font-family: inherit;
  @media (min-width: 998px) {
    height: 50px;
  }
`;

const Button = ({ label, onclick }) => {
  return <ButtonElement onClick={onclick}>{label}</ButtonElement>;
};

export default Button;
