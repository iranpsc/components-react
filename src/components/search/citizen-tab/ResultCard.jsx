import Bio from "./Bio";
import Buttons from "./Buttons";
import styled from "styled-components";

const Container = styled.div`
  background-color: #1a1a18;
  border-radius: 5px;
  padding: 20px;
  direction: rtl;
  display: grid;
  grid-template-columns: 10fr 0.8fr 1fr;
  hr {
    height: 90%;
    width: 2px;
    margin: 4px 2px 2px 2px;
    border: none;
    background-image: linear-gradient(to bottom, #dadada00, #b3b3b3, #dadada00);
  }
`;

const ResultCard = () => {
  return (
    <Container>
      <Bio />
      <hr />
      <Buttons />
    </Container>
  );
};

export default ResultCard;
