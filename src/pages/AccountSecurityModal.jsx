import AccountSecurity from "../components/accountsecurity/AccountSecurity";
import Header from "../components/Header";
import ModalXs from "../components/ModalXs";

const AccountSecurityModal = () => {
  return (
    <ModalXs>
      <Header title="امنیت حساب کاربری" />
      <AccountSecurity />
    </ModalXs>
  );
};

export default AccountSecurityModal;
