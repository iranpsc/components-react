import Bio from "./Bio";
import Buttons from "./Buttons";
import styled from "styled-components";

const Container = styled.div`
  background-color: #1a1a18;
  border-radius: 5px;
  padding: 20px;
`;
const ResultCard = () => {
  return (
    <Container>
      <Bio />
      <Buttons />
    </Container>
  );
};

export default ResultCard;
