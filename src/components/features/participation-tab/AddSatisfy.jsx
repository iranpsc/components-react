import Button from "../../Button";
import EditInput from "../enter-tab/EditInput";
import { MdAccessTime } from "react-icons/md";
import TextValueIcon from "../../TextValueIcon";
import Title from "../../Title";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  
`;
const Inputs = styled.div`
  display: grid ;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  @media (min-width: 1500px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const Info = styled.p`
  color: #dedee9;
  margin: 10px auto;
  font-size: 16px;
`;
const AddSatisfy = () => {
  const [count, setCount] = useState('0.0001')
  return (
    <Container>
      <Title title="افزودن رضایت" />
      <Info>
        با مشارکت کردن در این بخش و اضافه کردن رضایت میتوانید در زمان ساخت این
        ملک شریک شوید{" "}
      </Info>
      <Inputs>
        <EditInput satisfy value={count} onchange={(e) => setCount(e.target.value)} type="number" title="تعداد رضایت" />
        <TextValueIcon
          icon={<MdAccessTime />}
          title="زمان کسر شده"
          value="۲۵ دقیقه"
        />
      </Inputs>
      <Button label="ثبت رضایت" />
    </Container>
  );
};

export default AddSatisfy;
