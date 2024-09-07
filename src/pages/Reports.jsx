import { GlobalReportStateProvider } from "../components/reports/GlobalReportStateProvider";
import Header from "../components/Header";
import Modal from "../components/Modal";
import ProfileInfo from "../components/profile/ProfileInfo";
import ReportsInfo from "../components/reports/ReportsInfo";
import Tabs from "../components/Tabs";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Reports = () => {
  const [active, setActive] = useState("error_report");
  const location = useLocation();
  const { title, subdomain } = location.state || {};
  const tabs = [
    { key: "error_report", label: "گزارش خطا" },
    { key: "reports_list", label: "لیست گزارشات" },
  ];

  return (
    <GlobalReportStateProvider>
      <Modal>
        <Header profile title="گزارشات" />
        <Tabs tabs={tabs} active={active} setActive={setActive} />
        <ReportsInfo active={active} title={title} subdomain={subdomain} />
      </Modal>
    </GlobalReportStateProvider>
  );
};

export default Reports;
