import ParticipantItem from "./ParticipantItem";
import Title from "../../Title";
import styled from "styled-components";

const participants = [
  {
    id: 1,
    userCode: "HM-2000081",
    time: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
    debt: "۱۹۷۲.۱۹۱۰۲۲۱",
    level: "۱۹۷۲.۱۹۱۰۲۲۱",
    satisfyCount: "۰.۵۸",
    options: [
      {
        id: 1,
        submit: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
        change: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
      },
      {
        id: 2,
        submit: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
        change: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
      },
    ],
  },
  {
    id: 2,
    userCode: "HM-2000081",
    time: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
    debt: "۱۹۷۲.۱۹۱۰۲۲۱",
    level: "۱۹۷۲.۱۹۱۰۲۲۱",
    satisfyCount: "۰.۵۸",
    options: [
      {
        id: 1,
        submit: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
        change: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
      },
      {
        id: 2,
        submit: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
        change: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
      },
    ],
  },
  {
    id: 3,
    userCode: "HM-2000081",
    time: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
    debt: "۱۹۷۲.۱۹۱۰۲۲۱",
    level: "۱۹۷۲.۱۹۱۰۲۲۱",
    satisfyCount: "۰.۵۸",
    options: [
      {
        id: 1,
        submit: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
        change: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
      },
      {
        id: 2,
        submit: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
        change: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
      },
    ],
  },
];

const Container = styled.div`
  margin: 30px 0 0 0;
  direction: rtl;
`;
const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  direction: ltr;
  gap: 10px;
  @media (min-width: 1500px) {
    overflow-y: auto;
    height: 150px !important;
  }
  @media (min-width: 1900px) {
    overflow-y: auto;
    height: 230px !important;
  }
`;
const ParticipantList = () => {
  return (
    <Container>
      <Title title="لیست افراد مشارکت کننده" />
      <Wrapper>
        {participants.map((item) => (
          <ParticipantItem key={item.id} {...item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default ParticipantList;
