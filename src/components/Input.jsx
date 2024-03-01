import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  background-color: #2c2c2c;
  border: 1px solid #454545;
  overflow: hidden;
  border-radius: 5px;
  height: 50px;
  padding: 0 10px;
  display: flex;
  width: 100%;
`;

const InputElement = styled.input`
  outline: none;
  border: none;
  color: #84858f;
  background-color: #2c2c2c;
  width: 100%;
  height: 100%;
  font-size: 16px;
`;
const Span = styled.span`
  position: absolute;
  left: 10px;
  top: 10px;
  color: #dedee9;
`;
const Input = ({ type, placeholder, insideText, value, onchange, disabled }) => {
  return (
    <Wrapper>
      <InputElement
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        disabled={disabled}
      />
      <Span>{insideText}</Span>
    </Wrapper>
  );
};

export default Input;
