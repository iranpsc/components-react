import styled from "styled-components";

const TabsWrapper = styled.div`
  border-bottom: 1px solid #454545;
  justify-content: flex-start;
  display: flex;
`;

const TabItem = styled.h3`
  color: ${(props) => (props.active ? "#ffc700" : "#dedee9")};
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  padding: 8px 26px;
  cursor: pointer;
  border-bottom: 2px solid ${(props) => (props.active ? "#ffc700" : "#454545")};
  &:hover {
    color: #ffc700;
    border-bottom: 2px solid #ffc700;
  }
`;

const Tabs = ({ active, setActive, role }) => {
  return (
    <TabsWrapper>
      <TabItem active={active === "info"} onClick={() => setActive("info")}>
        خصوصیات
      </TabItem>
      {role === "seller" && (
        <TabItem active={active === "price"} onClick={() => setActive("price")}>
          قیمت گذاری
        </TabItem>
      )}
      {role === "buyer" && (
        <TabItem active={active === "price"} onClick={() => setActive("price")}>
          خرید
        </TabItem>
      )}
    </TabsWrapper>
  );
};

export default Tabs;
