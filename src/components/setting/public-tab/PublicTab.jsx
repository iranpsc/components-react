import Button from "../../Button";
import OnOff from "../OnOff";
import styled from "styled-components";

const settings = [
  { id: 1, label: "ارسال پیامک تسویه حساب تراکنش ها" },
  { id: 2, label: "ارسال پیامک اطلاعیه های متاورس" },
  { id: 3, label: "ارسال ایمیل تسویه حساب تراکنش ها" },
  { id: 4, label: "ارسال ایمیل اطلاعیه های متاورس" },
  { id: 5, label: "ارسال پیامک تایید خرید" },
  { id: 6, label: "ارسال پیامک تذکر ارسال شده" },
  { id: 7, label: "ارسال ایمیل تایید خرید" },
  { id: 8, label: "ارسال ایمیل تذکر ارسال شده" },
  { id: 9, label: "ارسال پیامک تایید برای ورود به حساب" },
  { id: 10, label: "ارسال ایمیل تایید برای ورود به متاورس" },
];
const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 15px;
  padding-right: 15px;
  height: 72%;
  overflow-y: auto;
  direction: ltr;
  @media (min-width: 1300px) {
    height: auto;
  }
`;
const Wrapper = styled.div`
  display: flex;
  direction: rtl;
  align-items: center;
  justify-content: space-between;
  background-color: #1a1a18;
  border-radius: 5px;
  padding: 10px;
  p {
    font-weight: 500;
    color: white;
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    p {
      font-size: 16px;
    }
  }
`;
const Settings = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
`;

const PublicTab = () => {
  return (
    <Container>
      <Settings>
        {settings.map((setting) => (
          <Wrapper key={setting.id}>
            <p>{setting.label}</p>
            <OnOff />
          </Wrapper>
        ))}
      </Settings>
      <div dir="rtl">
        <Button label="بروزرسانی" onclick={() => {}} />
      </div>
    </Container>
  );
};

export default PublicTab;
