import AuthenticationInfo from "../components/authentication-modal/AuthenticationInfo";
import Header from "../components/Header";
import Tabs from "../components/authentication-modal/Tabs";
import styled from "styled-components";
import { useState } from "react";

const Modal = styled.div`
  background-color: #000000;
  width: 80%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 15px 20px;
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
