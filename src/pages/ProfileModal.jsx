import Header from "../components/Header";
import Modal from "../components/Modal";
import ProfileInfo from "../components/profile/ProfileInfo";
import Tabs from "../components/profile/Tabs";
import { useState } from "react";

const ProfileModal = () => {
  const [active, setActive] = useState("property");

  return (
    <Modal>
      <Header profile title="حساب کاربری" />
      <Tabs active={active} setActive={setActive} />
      <ProfileInfo active={active} />
    </Modal>
  );
};

export default ProfileModal;
