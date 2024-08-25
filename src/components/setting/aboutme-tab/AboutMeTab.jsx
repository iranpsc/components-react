import About from "./About";
import Button from "../../Button";
import CountryCity from "./CountryCity";
import EducationsAndJob from "./EducationsAndJob";
import { GlobalStateProvider } from "./GlobalStateProvider";
import Hobby from "./Hobby";
import Memory from "./Memory";
import Opportunity from "./Opportunity";
import Prediction from "./Prediction";
import Title from "../../Title";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0;
  height: 70vh;
  overflow-y: auto;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Text = styled.div`
  p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
  }
`;

const AboutMeTab = () => {
  return (
    <GlobalStateProvider>
      <Container>
        <Header>
          <Text>
            <Title title="درباره من" />
            <p>
              توضیحاتی درباره خود در این بخش بنویسید تا شهروندان با شما آشنا
              شوند
            </p>
          </Text>
          <Button label="ذخیره شود" fit />
        </Header>
        <About />
        <EducationsAndJob />
        <Hobby />
        <CountryCity />
        <Memory />
        <Opportunity />
        <Prediction />
      </Container>
    </GlobalStateProvider>
  );
};

export default AboutMeTab;
