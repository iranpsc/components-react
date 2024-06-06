import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  border-radius: 5px;
  border: 1px solid #454545;
  padding: 10px 12px;
  color: #84858f;
  background-color: #2c2c2c;
  display: grid;
  align-items: center;
  grid-template-columns: 5px 1fr;
  gap: 50px;
  svg {
    color: white;
  }
  input {
    height: 100%;
    background-color: transparent;
    font-size: 16px;
    outline: none;
    border: none;
    color: white;
  }
`;

const SearchInput = ({ placeholder, value, onchange }) => {
  return (
    <Container>
      <FiSearch size={24} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
    </Container>
  );
};

export default SearchInput;
