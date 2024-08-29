import { MdKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";
import  { useState } from "react";

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.div`
  padding: 10px 12px;
  border-radius: 5px;
  border: 1px solid #454545;
  background-color: #2c2c2c;
  color: #84858f;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #2c2c2c;
  border-radius: 5px;
  border: 1px solid #454545;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 10px 12px;
  color: #84858f;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

const SearchInput = styled.input`
  width: 92%;
  padding: 10px 12px;
  border: none;
  border-bottom: 1px solid #454545;
  background-color: #2c2c2c;
  color: #84858f;
  outline: none;
`;

const Dropdown = ({ options, value, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {value || label}
        <MdKeyboardArrowDown />
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          <SearchInput
            type="text"
            placeholder="جستجو..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredOptions.map((option) => (
            <DropdownItem
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
