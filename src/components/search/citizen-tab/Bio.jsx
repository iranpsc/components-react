import Info from "./Info";
import Profile from "./Profile";
import styled from "styled-components";

const Container = styled.div`
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
