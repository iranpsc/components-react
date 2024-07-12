import rialGif from "../assets/images/profile/rial.gif";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Rial = () => {
  return (
    <Container>
      <span>ریال</span>
      <img width={26} alt="rial" src={rialGif} />
    </Container>
  );
};

export default Rial;
