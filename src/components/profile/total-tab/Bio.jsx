import Info from "./Info";
import Slider from "./Slider";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;
const Bio = () => {
  return (
    <Container>
      {/* <Slider /> */}
      <Info />
    </Container>
  );
};

export default Bio;
