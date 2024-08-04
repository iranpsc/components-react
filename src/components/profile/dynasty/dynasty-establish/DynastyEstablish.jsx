import Establish from "./Establish";
import PropertySelect from "./PropertySelect";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  margin: 20px 0;
  gap: 20px;
`;
const DynastyEstablish = ({ members }) => {
  return (
    <Container>
      <Establish members={members} />
      <PropertySelect />
    </Container>
  );
};

export default DynastyEstablish;
