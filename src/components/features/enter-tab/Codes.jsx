import { BsPlus } from "react-icons/bs";
import EditInput from "./EditInput";
import { RiCloseFill } from "react-icons/ri";
import styled from "styled-components";
import { useState } from "react";

const card_items = [
  { id: 1, title: "open-19292", value: "۲۰ ٪ تخفیف | ۱۲۰ نفر" },
  { id: 2, title: "open-19292", value: "۲۰ ٪ تخفیف | ۱۲۰ نفر" },
];
const codes = ["کد اختصاصی ورود ", "درصد تخفیف", "تعداد استفاده"];
const Div = styled.div``;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: 10px;
  @media (min-width: 1180px) {
    grid-template-columns: 3fr 3fr 3fr 2fr;
  }
`;

const CodeCard = styled.div`
  padding: 4px 4px 4px 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #1a1a18;
  border-radius: 5px;
  svg {
    color: white;
    cursor: pointer;
  }
`;

const CodeCards = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 20px;
`;

const AddCode = styled.div`
  background-color: #3b3b3b;
  border-radius: 5px;
  padding: 10px 14px 10px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 30px;
  color: white;
  cursor: pointer;
  @media (max-width: 900px) {
    h5 {
      font-size: 8px;
    }
  }
`;

const Summary = styled.div`
  h5 {
    &:first-of-type {
      font-size: 13px;
      color: #949494;
      font-weight: 600;
    }
    &:last-of-type {
      font-size: 13px;
      color: #949494;
    }
  }
`;
const Codes = () => {
  const [cards, setCards] = useState(card_items);
  return (
    <Div>
      <Container>
        {codes.map((code) => (
          <EditInput title={code} key={code} />
        ))}
        <AddCode>
          <BsPlus size={24} />
          <h5>افزودن کد اختصاصی</h5>
        </AddCode>
      </Container>
      <CodeCards>
        {cards.map((card) => (
          <CodeCard key={card}>
            <RiCloseFill
              onClick={() => {
                const updatedCards = cards.filter(
                  (item) => item.id !== card.id
                );
                setCards(updatedCards);
              }}
              size={24}
            />
            <Summary>
              <h5>open-19292</h5>
              <h5>۲۰ ٪ تخفیف | ۱۲۰ نفر</h5>
            </Summary>
          </CodeCard>
        ))}
      </CodeCards>
    </Div>
  );
};

export default Codes;
