import Header from "../components/Header";
import Modal from "../components/Modal";
import SettingInfo from "../components/setting/SettingInfo";
import Tabs from "../components/Tabs";
import { useState } from "react";

const Setting = () => {
  const [active, setActive] = useState("public");
  const tabs = [
    { key: "public", label: "تنظیمات عمومی" },
    { key: "account", label: "حساب کاربری" },
    { key: "security", label: "حریم خصوصی" },
  ];
  return (
    <Modal>
      <Header profile title="تنظیمات" />
      <Tabs tabs={tabs} active={active} setActive={setActive} />
      <SettingInfo active={active} />
    </Modal>
  );
};

export default Setting;
