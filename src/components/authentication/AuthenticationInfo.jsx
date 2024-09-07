import BankTab from "./bank-tab/BankTab";
import IdentityTab from "./identity-tab/IdentityTab";
import { useState } from "react";

const AuthenticationInfo = ({ active }) => {
  const [openErrorModal, setOpenErrorModal] = useState(false);

  if (active === "identity")
    return (
      <IdentityTab
        openErrorModal={openErrorModal}
        setOpenErrorModal={setOpenErrorModal}
      />
    );
  if (active === "bank")
    return (
      <BankTab
        openErrorModal={openErrorModal}
        setOpenErrorModal={setOpenErrorModal}
      />
    );
};

export default AuthenticationInfo;
