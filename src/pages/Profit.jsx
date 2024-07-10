import Header from "../components/Header";
import ProfitView from "../components/profit/ProfitView";
import styled from "styled-components";

const Container = styled.div`
  background-color: #000000;
  width: 450px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 15px 20px;
`;

const Profit = () => {
  return (
    <Container>
      <Header />
      <ProfitView />
    </Container>
  );
};

export default Profit;
