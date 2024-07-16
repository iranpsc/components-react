import ChallengeView from "../components/challenge/ChallengeView";
import Header from "../components/Header";
import styled from "styled-components";

const Container = styled.div`
  background-color: #000000;
  width: 450px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 15px 20px;
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
