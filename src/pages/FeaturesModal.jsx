import { PropertyInfo, Tabs } from "../components/features/index";

import Header from "../components/Header";
import Modal from "../components/Modal";
import { useState } from "react";

const FeaturesModal = () => {
  const [active, setActive] = useState("info");
  const [role] = useState("seller");
  return (
    <Modal>
      <Header title="اطلاعات ملک" />
      <Tabs role={role} active={active} setActive={setActive} />
      <PropertyInfo role={role} active={active} />
    </Modal>
  );
};

export default FeaturesModal;
