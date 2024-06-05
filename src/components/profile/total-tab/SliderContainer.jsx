import Slider from "./Slider";
import styled from "styled-components";

const Container = styled.div`
  direction: rtl;
  overflow: hidden;
  height: 300px;
`;
const SliderContainer = () => {
  return (
    <Container>
      <Slider />
    </Container>
  );
};

export default SliderContainer;
