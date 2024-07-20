import ChallengeView from "../components/challenge/ChallengeView";
import Header from "../components/Header";
import styled from "styled-components";

const Container = styled.div`
  background-color: #000000;
  width: 600px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  padding: 15px 20px;
  @media (min-width: 740px) {
    width: 650px;
  }
  @media (min-width: 840px) {
    width: 700px;
  }
  @media (min-width: 880px) {
    width: 750px;
  }
  @media (min-width: 900px) {
    width: 770px;
  }
  @media (min-width: 1024px) {
    width: 820px;
  }
  @media (min-width: 1080px) {
    width: 820px;
  }
  @media (min-width: 1280px) {
    width: 900px;
  }
  @media (min-width: 1366px) {
    width: 870px;
  }
  @media (min-width: 1400px) {
    width: 450px;
  }
`;

const Challenge = () => {
  return (
    <Container>
      <Header title="چالش پاسخ به سوالات" />
      <ChallengeView />
    </Container>
  );
};

export default Challenge;
