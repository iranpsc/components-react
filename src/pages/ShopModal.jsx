import Header from "../components/Header";
import Modal from "../components/Modal";
import ShopInfo from "../components/shop/ShopInfo";
import Tabs from "../components/Tabs";
import { useState } from "react";

const ShopModal = () => {
  const [active, setActive] = useState("tools");
  const tabs = [
    { key: "tools", label: "ابزارها" },
    { key: "currency", label: "ارزها" },
  ];
  return (
    <Modal>
      <Header title="فروشگاه" />
      <Tabs tabs={tabs} active={active} setActive={setActive} />
      <ShopInfo active={active} />
    </Modal>
  );
};

export default ShopModal;
