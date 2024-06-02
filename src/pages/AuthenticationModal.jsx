import AuthenticationInfo from "../components/authentication/AuthenticationInfo";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Tabs from "../components/authentication/Tabs";
import { useState } from "react";

const AuthenticationModal = () => {
  const [active, setActive] = useState("identity");
  return (
    <Modal>
      <Header
        title='احراز هویت'
      />
      <Tabs active={active} setActive={setActive} />
      <AuthenticationInfo active={active} />
    </Modal>
  );
};

export default AuthenticationModal;
