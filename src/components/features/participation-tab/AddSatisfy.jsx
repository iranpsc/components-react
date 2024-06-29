import { useContext, useState } from "react";

import Button from "../../Button";
import EditInput from "../enter-tab/EditInput";
import { MdAccessTime } from "react-icons/md";
import { ParticipantsContext } from "./ParticipationTab";
import TextValueIcon from "../../TextValueIcon";
import Title from "../../Title";
import styled from "styled-components";

const Container = styled.div``;
const Inputs = styled.div`
  display: grid;
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
  const [count, setCount] = useState("");
  const { participantsList, setParticipantsList } =
    useContext(ParticipantsContext);

  const addHandler = () => {
    if (count !== "") {
      setParticipantsList((prev) => [
        ...prev,
        {
          id: participantsList.length + 1,
          userCode: "HM-2000081",
          time: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
          debt: "۱۹۷۲.۱۹۱۰۲۲۱",
          level: "۱۹۷۲.۱۹۱۰۲۲۱",
          satisfyCount: count,
          options: [
            {
              id: 1,
              submit: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
              change: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
            },
          ],
        },
      ]);
    }
  };

  return (
    <Container>
      <Title title="افزودن رضایت" />
      <Info>
        با مشارکت کردن در این بخش و اضافه کردن رضایت میتوانید در زمان ساخت این
        ملک شریک شوید{" "}
      </Info>
      <Inputs>
        <EditInput
          satisfy
          step={0.0001}
          value={count}
          onchange={(e) => setCount(e.target.value)}
          type="number"
          title="تعداد رضایت"
        />
        <TextValueIcon icon={<MdAccessTime />} title="زمان کسر شده" value="" />
      </Inputs>
      <Button label="ثبت رضایت" onclick={addHandler} />
    </Container>
  );
};

export default AddSatisfy;
