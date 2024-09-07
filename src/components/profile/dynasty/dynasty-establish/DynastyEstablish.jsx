import Establish from "./Establish";
import PropertySelect from "./PropertySelect";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px 0;
  gap: 20px;
  overflow-y: auto;
  direction: ltr;
  padding-right: 15px;
  height: 235px;
  @media (min-width: 890px) {
    height: 260px;
  }
  @media (min-width: 930px) {
    height: 275px;
  }
  @media (min-width: 1024px) {
    height: 377px;
  }
  @media (min-width: 1180px) {
    height: 577px;
  }
  @media (min-width: 1280px) {
    height: 560px;
  }
  @media (min-width: 1366px) {
    height: 620px;
    grid-template-columns: 2fr 2fr;
    direction: rtl;
    padding-right: 0;
    overflow-y: hidden;
  }
`;
const DynastyEstablish = ({ members, setMode }) => {
  return (
    <Container>
      <Establish members={members} />
      <PropertySelect setMode={setMode} />
    </Container>
  );
};

export default DynastyEstablish;
