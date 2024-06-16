import ParticipantList from "./ParticipantList";
import Satisfy from "./Satisfy";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;
  padding-right: 15px;
  overflow-y: auto;
  height: 69%;
  direction: ltr;
  @media (min-width: 1024px) {
    height: 77%;
  }
  @media (min-width: 1500px) {
    height: auto;
  }
`;
const ParticipationTab = () => {
  return (
    <Container>
      <Satisfy />
      <ParticipantList />
    </Container>
  );
};

export default ParticipationTab;
