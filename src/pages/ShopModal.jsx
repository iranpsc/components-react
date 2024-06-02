import Header from "../components/Header";
import Modal from "../components/Modal";
import ShopInfo from "../components/shop/ShopInfo";
import Tabs from "../components/shop/Tabs";
import { useState } from "react";

const ShopModal = () => {
  const [active, setActive] = useState("tools");
  return (
    <Modal>
      <Header title="فروشگاه" />
      <Tabs active={active} setActive={setActive} />
      <ShopInfo active={active} />
    </Modal>
  );
};

export default ShopModal;
