import styled from "styled-components";

const ButtonElement = styled.button`
  border-radius: 10px;
  background-color: #ffc700;
  border: none;
  padding: ${(props) => props.large && "0 20px"};
  width: ${(props) =>
    props.edit
      ? "125px"
      : props.large
      ? "fit-content"
      : props.full
      ? "100%"
      : "112px"};
  height: 45px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  color: #191b21;
  font-family: inherit;
  @media (max-width: 840px) {
    width: ${(props) => (props.row ? "55px" : props.full && "100%")};
    height: ${(props) => props.row && "35px"};
    font-size: ${(props) => props.row && "14px"};
  }
  @media (min-width: 998px) {
    height: 50px;
  }
`;

const Button = ({ label, onclick, row, edit, large, full }) => {
  return (
    <ButtonElement
      full={full}
      large={large}
      edit={edit}
      row={row}
      onClick={onclick}
    >
      {label}
    </ButtonElement>
  );
};
export default Button;
