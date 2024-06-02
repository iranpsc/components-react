import styled from "styled-components";

const EditInput = styled.input`
  height: 50px;
  border-radius: 5px;
  padding: 0 10px;
  outline: none;
  flex-grow: 1;
  border: none;
  color: #84858f;
  background-color: #2c2c2c;
  font-size: 16px;
`;
const Input = ({ placeholder, onchange }) => {
  return <EditInput value='' onChange={onchange} placeholder={placeholder} />;
};

export default Input;
