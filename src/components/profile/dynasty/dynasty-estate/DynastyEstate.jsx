import Convert from "./Convert";
import Owner from "./Owner";
import styled from "styled-components";

const Container = styled.div`
padding: 20px 0;
display: flex;
padding-right: 15px;
flex-direction: column;
gap: 20px;
height: 230px;
overflow-y: auto;
direction: ltr;
@media (min-width: 880px) {
  height: 186px;
}
@media (min-width: 890px) {
  height: 257px;
}
@media (min-width: 930px) {
  height: 274px;
}
@media (min-width: 1024px) {
  height: 377px;
}
@media (min-width: 1280px) {
  height: 560px;
}
@media (min-width: 1366px) {
  height: 620px;
}
`;

const DynastyEstate = () => {
  return (
    <Container>
      <Owner />
      <Convert />
    </Container>
  );
};

export default DynastyEstate;
