import Button from "../Button";
import Description from "./Description";
import Inputs from "./Inputs";
import SendFiles from "./SendFiles";
import Title from "../Title";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0;
  height: 220px;
  overflow-y: auto;
  direction: ltr;
  padding-right: 15px;
  @media (min-width: 840px) {
    height: 232px;
  }
  @media (min-width: 880px) {
    height: 187px;
  }
  @media (min-width: 890px) {
    height: 256px;
  }
  @media (min-width: 900px) {
    height: 274px;
  }
  @media (min-width: 910px) {
    height: 254px;
  }
  @media (min-width: 1024px) {
    height: 380px;
  }
  @media (min-width: 1180px) {
    height: 577px;
  }
  @media (min-width: 1280px) {
    height: 560px;
  }
  @media (min-width: 1366px) {
    height: 620px;
  }
  @media (min-width: 1920px) {
    height: 622px;
  }
  p {
    margin: 10px 0;
    direction: rtl;
    color: #dedee9;
    font-size: 16px;
    font-weight: 400;
    span {
      font-weight: 600;
      color: white;
    }
  }
`;

const ErrorReportTab = ({ title, subdomain }) => {
  return (
    <Container>
      <Title title="گزارش خطا" right />
      <p>
        گزارش خود را از صفحه <span>{title}</span> بخش <span>{subdomain}</span>{" "}
        بنویسید
      </p>
      <Inputs />
      <Description />
      <SendFiles />
      <div dir="rtl">
        <Button fit label="ارسال گزارش" />
      </div>
    </Container>
  );
};

export default ErrorReportTab;
