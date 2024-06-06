import Info from "./Info";
import Profile from "./Profile";
import styled from "styled-components";

const Container = styled.div`
  border-bottom: 1px solid #3b3b3b;
  padding-bottom: 25px;
`;
const Bio = () => {
  return (
    <Container>
      <Profile />
      <Info />
    </Container>
  );
};

export default Bio;
