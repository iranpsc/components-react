import styled from "styled-components";
import { useRef } from "react";

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
  const tabsRef = useRef();
  const tabHandler = (tab) => {
    setActive(tab);

    if (tabsRef.current) {
      const selectedTab = tabsRef.current.querySelector(`[data-tab="${tab}"]`);

      if (selectedTab) {
        const tabWidth = selectedTab.offsetWidth;
        const tabOffsetLeft = selectedTab.offsetLeft;

        if (tabOffsetLeft < 400) {
          tabsRef.current.scrollLeft -= 100;
        } else if (
          tabOffsetLeft + tabWidth >
          tabsRef.current.offsetWidth - 400
        ) {
          tabsRef.current.scrollLeft += 100;
        }
      }
    }
  };

  return (
    <TabsWrapper ref={tabsRef}>
      <TabItem
        data-tab="info"
        active={active === "info"}
        onClick={() => tabHandler("info")}
      >
        خصوصیات
      </TabItem>
      <TabItem
        data-tab="seller"
        active={active === "seller"}
        onClick={() => tabHandler("seller")}
      >
        قیمت گذاری
      </TabItem>
      <TabItem
        data-tab="buyer"
        active={active === "buyer"}
        onClick={() => tabHandler("buyer")}
      >
        خرید
      </TabItem>
      <TabItem
        data-tab="enter"
        active={active === "enter"}
        onClick={() => tabHandler("enter")}
      >
        ورود به ملک
      </TabItem>
      <TabItem
        data-tab="build"
        active={active === "build"}
        onClick={() => tabHandler("build")}
      >
        ساخت بنا
      </TabItem>
      <TabItem
        data-tab="physic"
        active={active === "physic"}
        onClick={() => tabHandler("physic")}
      >
        اطلاعات فیزیکی
      </TabItem>
      <TabItem
        data-tab="participation"
        active={active === "participation"}
        onClick={() => tabHandler("participation")}
      >
        مشارکت در ساخت{" "}
      </TabItem>
      <TabItem
        data-tab="history"
        active={active === "history"}
        onClick={() => tabHandler("history")}
      >
        تاریخچه خرید
      </TabItem>
    </TabsWrapper>
  );
};

export default Tabs;
