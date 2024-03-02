import { BuyerTab, InfoTab, SellerTab } from "../index";

const PropertyInfo = ({ active, role }) => {
  if (active === "info") return <InfoTab />;
  if (active === "price" && role === "seller") return <SellerTab role={role} />;
  if (active === "price" && role === "buyer") return <BuyerTab />;
};

export default PropertyInfo;
