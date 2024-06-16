import Button from "../../Button";
import { IoCardOutline } from "react-icons/io5";
import styled from "styled-components";
import { useState } from "react";

const Select = styled.select`
  border-radius: 5px;
  background-color: #2c2c2c;
  height: 48px;
  width: 100%;
  border: none;
  outline: none;
  color: white;
  padding: 0 10px;
  border: 1px solid #454545;
  margin-top: 30px;
  margin-bottom: 20px;
  option {
    color: white;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
const Title = styled.div`
  color: #353535;
  font-size: 16px;
  font-weight: 600;
`;
const Container = styled.div`
  padding: 20px;
  border-radius: 5px;
  background-color: #1a1a18;
  direction: rtl;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

const Div = styled.div`
  display: flex;
  padding-bottom: ${(props) => (props.id === 1 ? "20px" : "0")};
  border-bottom: ${(props) => (props.id === 1 ? "1px solid #454545" : "none")};
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;
  }
  input {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    outline: none;
    width: 70px;
    height: 50px;
    border: 1px solid #454545;
    border-radius: 5px;
    background-color: #2c2c2c;
    color: #84858f;
  }
  @media (min-width: 1024px) {
    span {
      font-size: 16px;
    }
  }
`;

const items = [
  { id: 1, title: "زمان تسویه حساب بازه زمانی | روزانه", value: 3 },
  { id: 2, title: "خروج اتوماتیک از حساب کاربری | دقیقه", value: 60 },
];

const options = [
  { id: 1, label: "IR-125478963258745896324587" },
  { id: 2, label: "IR-125478963258745896324587" },
];
const Bank = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <Container>
      <Title>متغییر های الزامی</Title>
      <Select onChange={handleSelectChange} value={selectedValue}>
        <option value="">شماره کارت</option>
        {options.map((item) => (
          <option value={item.label} key={item.id}>
            <IoCardOutline />
            <span>{item.label}</span>
          </option>
        ))}
      </Select>
      <Wrapper>
        {items.map((item) => (
          <Div id={item.id} key={item.id}>
            <span>{item.title}</span>
            <input placeholder={item.value} type="number" />
          </Div>
        ))}
      </Wrapper>
      <Button
        full
        label="ذخیره شود"
        onclick={() => {}}
      />
    </Container>
  );
};
export default Bank;
