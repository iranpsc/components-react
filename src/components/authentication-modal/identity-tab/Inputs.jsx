import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

import DatePicker from "react-multi-date-picker";
import EditInput from "../../vod-modal/enter-tab/EditInput";
import { FaRegCalendarAlt } from "react-icons/fa";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styled from "styled-components";
import { useState } from "react";

const Birthday = styled.div`
  direction: rtl;
  border-radius: 5px;
  border: 1px solid #454545;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: #2c2c2c;
  height: 48px;
  padding: 0 10px;
  svg {
    color: gray;
  }
  input {
    color: gray;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    &:focus {
      border: none;
      outline: none;
    }
    font-size: 16px;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
`;
const Select = styled.select`
  border-radius: 5px;
  border: 1px solid
    ${(props) =>
      props.identityError && props.value === "" ? "#C30000" : "#454545"};
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: #2c2c2c;
  height: 48px;
  padding: 0 10px;
  color: #84858f;
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 16px;
`;

const Inputs = ({ data, identityError, inputValues, handleInputChange }) => {
  const [value, setValue] = useState();
  return (
    <Container>
      {data.slice(0, 3).map((item) => (
        <EditInput
          title={item.label}
          value={inputValues[item.slug]}
          onchange={handleInputChange}
          key={item.id}
          name={item.slug}
          identityError={identityError}
          type={item.id === 1 || item.id === 2 ? "text" : "number"}
        />
      ))}
      <Select
        identityError={identityError}
        value={inputValues[data[3].slug]}
        onChange={handleInputChange}
        name={data[3].slug}
      >
        {data[3].options.map((option) => (
          <option key={option.id}>{option.city}</option>
        ))}
      </Select>

      <Birthday>
        <DatePicker
        shadow='red'
          value={inputValues[data[4].slug]}
          className="bg-dark"
          onChange={setValue}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
        />
        <FaRegCalendarAlt size={20} />
      </Birthday>
      <Select
        value={inputValues[data[5].slug]}
        onChange={handleInputChange}
        name={data[5].slug}
        identityError={identityError}
      >
        {data[5].options.map((option) => (
          <option key={option.id}>{option.gender}</option>
        ))}
      </Select>
    </Container>
  );
};

export default Inputs;
