import AboutMeTab from "./aboutme-tab/AboutMeTab";
import AccountTab from "./account-tab/AccountTab";
import PublicTab from "./public-tab/PublicTab";
import SecurityTab from "./security-tab/SecurityTab";

const SettingInfo = ({ active }) => {
  if (active === "public") return <PublicTab />;
  if (active === "account") return <AccountTab />;
  if (active === "security") return <SecurityTab />;
  if (active === "aboutme") return <AboutMeTab />;
};

export default SettingInfo;
