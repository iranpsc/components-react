import styled from "styled-components";

const TabsWrapper = styled.div`
  border-bottom: 1px solid #454545;
  justify-content: flex-start;
  display: flex;
  margin-top: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
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
      <TabItem active={active === "info"} onClick={() => setActive("info")}>
        خصوصیات
      </TabItem>
      <TabItem active={active === "seller"} onClick={() => setActive("seller")}>
        قیمت گذاری
      </TabItem>
      <TabItem active={active === "buyer"} onClick={() => setActive("buyer")}>
        خرید
      </TabItem>
      <TabItem active={active === "enter"} onClick={() => setActive("enter")}>
        ورود به ملک
      </TabItem>
      <TabItem active={active === "build"} onClick={() => setActive("build")}>
        ساخت بنا
      </TabItem>
      <TabItem active={active === "physic"} onClick={() => setActive("physic")}>
        اطلاعات فیزیکی
      </TabItem>
      <TabItem
        active={active === "participation"}
        onClick={() => setActive("participation")}
      >
        مشارکت در ساخت{" "}
      </TabItem>
      <TabItem
        active={active === "history"}
        onClick={() => setActive("history")}
      >
        تاریخچه خرید
      </TabItem>
    </TabsWrapper>
  );
};

export default Tabs;
