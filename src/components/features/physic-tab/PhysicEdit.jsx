import EditInputs from "./EditInputs";
import Title from "../../Title";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;
  overflow-y: auto;
  padding-right: 15px;
  direction: ltr;
  height: 68%;
  h3 {
    &:first-of-type {
      direction: rtl;
    }
  }
  @media (min-width: 840px) {
    height: 67%;
  }
  @media (min-width: 1024px) and (max-width: 1369px) {
    height: 71%;
  }
  @media (min-width: 1370px) {
    height: 77%;
  }
  @media (min-width: 1500px) {
    padding-right: 0;
  }
`;
const PhysicEdit = ({ setEdit, inputs, setInputs }) => {
  return (
    <Container>
      <Title title="ویرایش اطلاعات فیزیکی" />
      <EditInputs inputs={inputs} setInputs={setInputs} setEdit={setEdit} />
    </Container>
  );
};

export default PhysicEdit;
