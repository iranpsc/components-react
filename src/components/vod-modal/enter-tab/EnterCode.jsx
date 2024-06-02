import Button from "../../Button";
import Input from "../physic-tab/Input";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 30px;
  gap: 20px;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const ButtonEdit = styled.button`
  border-radius: 10px;
  background-color: ${(props) => (props.blue ? "#18C08F" : "#E9E9E9")};
  color: ${(props) => (props.blue ? "#FFFFFF" : "#949494")} !important;
  border: none;
  padding: 0 14px;
  width: fit-content;
  height: 45px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  color: #191b21;
  font-family: inherit;
  @media (min-width: 998px) {
    height: 50px;
  }
`;
const EnterCode = ({ setPayStatus, isOwner, setEdit }) => {
  return (
    <Container>
      <Input placeholder="کد ورود اختصاصی" onchange={() => {}} />
      <Div>
        <Button label="پرداخت و ورود" onclick={() => setPayStatus(true)} />
        {isOwner && (
          <ButtonEdit blue onClick={() => setEdit(true)}>
            ویرایش اطلاعات
          </ButtonEdit>
        )}
      </Div>
    </Container>
  );
};

export default EnterCode;
