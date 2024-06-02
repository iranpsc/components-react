import Bio from "./Bio";
import Details from "./Details";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 0;
  gap: 10px;
  overflow-y: auto;
  display: grid;
  gap: 20px;
  height: 65%;
  @media (min-width: 1024px) {
    height: 70%;
  }
  @media (min-width: 1180px) {
    height: 80%;
  }
  @media (min-width: 1500px) {
    grid-template-columns: 1fr 2fr;
  }
`;
const TotalTab = () => {
  return (
    <Container>
      <Bio />
      <Details />
    </Container>
  );
};

export default TotalTab;
