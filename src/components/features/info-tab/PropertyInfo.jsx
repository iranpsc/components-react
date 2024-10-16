import { BuyerTab, InfoTab, SellerTab } from "../index";

import BuildTab from "../build-tab/BuildTab";
import EnterTab from "../enter-tab/EnterTab";
import HistoryTab from "../history-tab/HistoryTab";
import ParticipationTab from "../participation-tab/ParticipationTab";
import PhysicTab from "../physic-tab/PhysicTab";

const PropertyInfo = ({ active }) => {
  if (active === "info") return <InfoTab />;
  if (active === "seller") return <SellerTab seller />;
  if (active === "buyer" ) return <BuyerTab />;
  if (active === "enter") return <EnterTab />;
  if (active === "build") return <BuildTab />;
  if (active === "physic") return <PhysicTab />;
  if (active === "participation") return <ParticipationTab />;
  if (active === "history") return <HistoryTab />;
};

export default PropertyInfo;
