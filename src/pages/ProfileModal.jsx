import Header from "../components/Header";
import Modal from "../components/Modal";
import ProfileInfo from "../components/profile/ProfileInfo";
import Tabs from "../components/Tabs";
import { useState } from "react";

const ProfileModal = () => {
  const [active, setActive] = useState("suggestion");

  const tabs = [
    { key: "total", label: "کلیات" },
    { key: "property", label: "دارایی" },
    { key: "transactions", label: "تراکنش ها" },
    { key: "dynasty", label: "سلسله" },
    { key: "suggestion", label: "پیشنهادات" },
  ];

  const subdomain =
    active === "dynasty"
      ? "سلسله"
      : active === "transactions"
      ? "تراکنش ها"
      : active === "property"
      ? "دارایی"
      : active === "suggestion"
      ? "پیشنهادات"
      : "کلیات";

  return (
    <Modal>
      <Header profile title="حساب کاربری" subdomain={subdomain} />
      <Tabs tabs={tabs} active={active} setActive={setActive} />
      <ProfileInfo active={active} />
    </Modal>
  );
};

export default ProfileModal;
