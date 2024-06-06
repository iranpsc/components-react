import Info from "./Info";
import Profile from "./Profile";
import styled from "styled-components";

const Container = styled.div`
  border-left: 1px solid #3b3b3b;
  padding-left: 25px;
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
