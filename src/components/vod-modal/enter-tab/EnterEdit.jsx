import EditInputs from "./EditInputs";
import Title from "../../Title";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 0;
  overflow-y: auto;
  direction: ltr;
  height: 65%;
  @media (min-width: 1024px) {
    height: 70%;
  }
  @media (min-width: 1180px) {
    height: 80%;
  }
  @media (min-width: 1360px) {
    height: 77%;
  }
  @media (min-width: 1500px) {
    height: 77%;
    grid-template-columns: 2fr 3fr;
  }
`;
const EnterEdit = ({ setEdit, data, payed, setPayed }) => {
  return (
    <Container>
      <Title right title="ویرایش اطلاعات" />
      <EditInputs data={data} setEdit={setEdit} setPayed={setPayed} />
    </Container>
  );
};

export default EnterEdit;
