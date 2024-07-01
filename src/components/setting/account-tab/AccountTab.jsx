import Bank from "./Bank";
import ChangeCard from "./ChangeCard";
import styled from "styled-components";

const items = [
   {
    id: 1,
    title: "تغییر شماره موبایل در سراسر متاورس",
    warn: "فقط ۱ بار می توانید شماره موبایل خود را عوض کنید",
    inputs: [
      { id: 1, type: "number", label: "شماره تلفن جدید", value: "" },
      { id: 2, type: "number", label: "کد تایید", value: "" },
    ],
  },
  {
    id: 2,
    title: "تغییر ایمیل ورود به متاورس",
    warn: "فقط ۱ بار می توانید ایمیل خود را عوض کنید",
    inputs: [
      { id: 1, type: "email", label: "ایمیل جدید", value: "" },
      { id: 2, type: "number", label: "کد تایید", value: "" },
    ],
  },
 
  {
    id: 3,
    title: "تغییر رمز ورود به متاورس",
    inputs: [
      { id: 1, type: "number", label: "رمز قدیمی", value: "" },
      { id: 2, type: "number", label: "رمز جدید", value: "" },
    ],
  },
];

const Container = styled.div`
  padding-top: 20px;
  padding: 20px;
  padding-right: 15px;
  display: grid;
  direction: ltr;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: 20px;
  padding-right: 15px;
  overflow-y: auto;
  height: 73%;
  @media (min-width: 1400px) {
    height: 79%;
  }
`;
const AccountTab = () => {
  return (
    <Container>
      {items.map((item) => (
        <ChangeCard key={item.id} {...item} />
      ))}
      <Bank />
    </Container>
  );
};

export default AccountTab;
