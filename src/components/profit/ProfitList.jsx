import ProfitCard from "./ProfitCard";
import styled from "styled-components";

const Container = styled.div`
  direction: rtl;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProfitList = ({ cards, onClick }) => {
  return (
    <Container>
      {cards.map((card) => (
        <ProfitCard key={card.id} {...card} onclick={() => onClick(card)} />
      ))}
    </Container>
  );
};

export default ProfitList;
