import { Header, PropertyInfo, Tabs } from "./index";

import styled from "styled-components";
import { useState } from "react";

const Modal = styled.div`
  border-radius: 10px;
  background-color: #000000;
  padding: 15px 25px;
  width: 85%;
  height: 80%;
  overflow: hidden;
  @media (min-width: 992px) {
    width: 70%;
    height: 94%;
  }
  @media (min-width: 1300px) {
    width: 82%;
  }
`;

const VodModal = () => {
  const [active, setActive] = useState("info");
  const [role] = useState("seller");

  return (
    <Modal>
      <Header />
      <Tabs role={role} active={active} setActive={setActive} />
      <PropertyInfo role={role} active={active} />
    </Modal>
  );
};

export default VodModal;
