import { PropertyInfo, Tabs } from "../components/vod-modal/index";

import Header from "../components/Header";
import styled from "styled-components";
import { useState } from "react";

const Modal = styled.div`
  background-color: #000000;
  padding: 15px 20px;
  width: 80%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  max-width: 800px;
  overflow: hidden;
  @media (min-width: 1023px) {
    border-radius: 10px;
    height: 94%;
    max-width: 1330px;
    max-height: 782px;
    position: static;
  }

  @media (min-width: 1024px) and (max-width: 1180px) {
    width: 85%;
  }

  @media (min-width: 1920px) {
    max-width: 70%;
    max-height: 782px;
  }
`;

const VodModal = () => {
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

export default VodModal;
