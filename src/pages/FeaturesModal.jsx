import { PropertyInfo, Tabs } from "../components/features/index";

import Header from "../components/Header";
import Modal from "../components/Modal";
import { useState } from "react";

const FeaturesModal = () => {
  const [active, setActive] = useState("info");
  return (
    <Modal>
      <Header title="اطلاعات ملک" />
      <Tabs active={active} setActive={setActive} />
      <PropertyInfo active={active} />
    </Modal>
  );
};

export default FeaturesModal;
