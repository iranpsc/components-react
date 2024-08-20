import Details from "./Details";
import Model3D from "./Model3D";
import Title from "../../../Title";
import styled from "styled-components";

const Container = styled.div`
direction: rtl;
`;
const Wrapper = styled.div`
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #1a1a18;
  display: grid;
  grid-template-rows: 1fr 1fr;
  @media (min-width: 1366px) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
  }
`;
const Owner = () => {
  return (
    <Container>
      <Title right title="ملک سلسله" />
      <Wrapper>
        <Model3D />
        <Details />
      </Wrapper>
    </Container>
  );
};

export default Owner;
