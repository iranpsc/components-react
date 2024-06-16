import Header from "../components/Header";
import Modal from "../components/Modal";
import SettingInfo from "../components/setting/SettingInfo";
import Tabs from "../components/setting/Tabs";
import { useState } from "react";

const Setting = () => {
  const [active, setActive] = useState("public");

  return (
    <Modal>
      <Header profile title="تنظیمات" />
      <Tabs active={active} setActive={setActive} />
      <SettingInfo active={active} />
    </Modal>
  );
};

export default Setting;
