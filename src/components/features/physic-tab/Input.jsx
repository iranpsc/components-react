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
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const Input = ({ placeholder, onchange, value, type }) => {
  return (
    <EditInput
      type={type}
      value={value}
      onChange={onchange}
      placeholder={placeholder}
    />
  );
};

export default Input;
