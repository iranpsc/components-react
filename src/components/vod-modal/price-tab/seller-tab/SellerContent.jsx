import { Lowest, PriceDefine } from "../../index";

const SellerContent = ({ option }) => {
  if (option) return <Lowest />;
  if (!option) return <PriceDefine />;
};

export default SellerContent;
