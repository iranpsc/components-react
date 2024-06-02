import styled from "styled-components";

const TabsWrapper = styled.div`
  border-bottom: 1px solid #454545;
  justify-content: flex-start;
  display: flex;
`;

const TabItem = styled.h3`
  color: ${(props) => (props.active ? "#ffc700" : "#dedee9")};
  font-weight: 500;
  margin: 0;
  font-size: 16px;
  padding: 8px 26px;
  cursor: pointer;
  border-bottom: 2px solid ${(props) => (props.active ? "#ffc700" : "#454545")};
  @media (min-width: 998px) {
    font-size: 18px;
  }
  &:hover {
    color: #ffc700;
    border-bottom: 2px solid #ffc700;
  }
`;

const Tabs = ({ active, setActive }) => {
  return (
    <TabsWrapper>
      <TabItem active={active === "tools"} onClick={() => setActive("tools")}>
        ابزارها
      </TabItem>
      <TabItem active={active === "currency"} onClick={() => setActive("currency")}>
        ارزها
      </TabItem>
    </TabsWrapper>
  );
};

export default Tabs;
