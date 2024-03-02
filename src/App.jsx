import VodModal from "./components/vod-modal/VodModal";
import styled from "styled-components";
const Wrapper = styled.div`
  height: 94vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 998px) {
    height: 97vh;
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
