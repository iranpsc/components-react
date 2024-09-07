import Header from "../components/Header";
import Modal from "../components/Modal";
import { PropertyInfo } from "../components/features/index";
import Tabs from "../components/Tabs";
import { useState } from "react";

const FeaturesModal = () => {
  const [active, setActive] = useState("info");
  const tabs = [
    { key: "info", label: "خصوصیات" },
    { key: "seller", label: "قیمت گذاری" },
    { key: "buyer", label: "خرید" },
    { key: "enter", label: "ورود به ملک" },
    { key: "build", label: "ساخت بنا" },
    { key: "physic", label: "اطلاعات فیزیکی" },
    { key: "participation", label: "مشارکت در ساخت" },
    { key: "history", label: "تاریخچه خرید" },
  ];

  const handleTabClick = (tab, tabsRef) => {
    if (tabsRef) {
      const selectedTab = tabsRef.querySelector(`[data-tab="${tab}"]`);

      if (selectedTab) {
        const tabWidth = selectedTab.offsetWidth;
        const tabOffsetLeft = selectedTab.offsetLeft;

        if (tabOffsetLeft < 400) {
          tabsRef.scrollLeft -= 100;
        } else if (tabOffsetLeft + tabWidth > tabsRef.offsetWidth - 400) {
          tabsRef.scrollLeft += 100;
        }
      }
    }
  };
  
  return (
    <Modal>
      <Header title="اطلاعات ملک" />
      <Tabs
        tabs={tabs}
        active={active}
        setActive={setActive}
        onTabClick={handleTabClick}
      />{" "}
      <PropertyInfo active={active} />
    </Modal>
  );
};

export default FeaturesModal;
