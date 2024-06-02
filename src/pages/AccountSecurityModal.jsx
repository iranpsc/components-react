import AccountSecurity from "../components/accountsecurity/AccountSecurity";
import Header from "../components/Header";
import styled from "styled-components";

const Modal = styled.div`
  background-color: #1a1a18;
  width: 550px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
  padding: 15px 20px;
`;

const AccountSecurityModal = () => {
  return (
    <Modal>
      <Header title="امنیت حساب کاربری" />
      <AccountSecurity />
    </Modal>
  );
};

export default AccountSecurityModal;
