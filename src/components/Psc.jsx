import pscGif from "../assets/images/profile/psc.gif";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Psc = () => {
  return (
    <Container>
      <span>PSC</span>
      <img width={26} alt="psc" src={pscGif} />
    </Container>
  );
};

export default Psc;
