import EditInput from "../enter-tab/EditInput";
import { MdAccessTime } from "react-icons/md";
import TextValueIcon from "../../TextValueIcon";
import styled from "styled-components";

const BackGround = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.713);
`;
const Modal = styled.div`
  border-radius: 10px;
  background-color: #000000;
  padding: 20px;
  width: 100%;
  max-width: 515px;
  max-height: 363px;
  direction: rtl;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  @media (max-width: 1023px) {
    font-size: 18px;
  }
`;
const Info = styled.p`
  color: #dedee9;
  font-weight: 400;
  text-align: justify;
  margin: 20px 0;
  font-size: 16px;
  @media (max-width: 1023px) {
    font-size: 12px;
  }
`;
const Inputs = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin: 25px 0;
  &:first-child{
    width: 100%;
  }
`;
const Button = styled.div`
  border-radius: 10px;
  background-color: #ffc700;
  border: none;
  height: 45px;
  width: fit-content;
  padding: 0 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  color: #191b21;
  font-family: inherit;
  @media (min-width: 998px) {
    height: 50px;
  }
`;
const EditConfirmModal = ({setEdit}) => {
  return (
    <BackGround>
      <Modal>
        <div>
          <Title>ویرایش تعداد رضایت</Title>
          <Info>با تغییر مقدار رضایت در زمان ساخت ملک تاثیر خواهید گزاشت </Info>
        </div>
        <Inputs>
          <EditInput type="number" title="تعداد رضایت" />
          <TextValueIcon
            icon={<MdAccessTime />}
            title="زمان کسر شده"
            value="۲۵ دقیقه"
          />
        </Inputs>
        <Button onClick={() => setEdit(false)}>ویرایش تعداد رضایت</Button>
      </Modal>
    </BackGround>
  );
};

export default EditConfirmModal;
