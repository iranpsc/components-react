import AuthenticationInfo from "../components/authentication/AuthenticationInfo";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Tabs from "../components/Tabs";
import { useState } from "react";

const AuthenticationModal = () => {
  const [active, setActive] = useState("identity");
  const tabs = [
    { key: "identity", label: "احراز هویت " },
    { key: "bank", label: "احراز بانکی" },
  ];
  return (
    <Modal>
      <Header title="احراز هویت" />
      <Tabs tabs={tabs} active={active} setActive={setActive} />
      <AuthenticationInfo active={active} />
    </Modal>
  );
};

export default AuthenticationModal;
