import Header from "../components/Header";
import ProfitView from "../components/profit/ProfitView";
import Tabs from "../components/profit/Tabs";
import ThinModal from "../components/ThinModal";

const Profit = () => {
  return (
    <ThinModal position='right'>
      <Header title="جذب سود ساعت شمار" />
      <Tabs />
      <ProfitView />
    </ThinModal>
  );
};

export default Profit;
