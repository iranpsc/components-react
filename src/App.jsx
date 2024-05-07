import VodModal from "./components/vod-modal/VodModal";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  height: 95.9vh !important;
  align-items: center;
  justify-content: start;
  @media (min-width: 998px) {
    height: 97vh;
    justify-content: center;
  }
`;
function App() {
  return (
    <Wrapper>
      <VodModal />;
    </Wrapper>
  );
}

export default App;
