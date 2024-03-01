import { SellerPrice, SuggestPrice } from "../../index";

const BuyerContent = ({ option }) => {
  if (option) return <SellerPrice />;
  if (!option) return <SuggestPrice />;
};

export default BuyerContent;
