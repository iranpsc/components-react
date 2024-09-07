import ErrorReportTab from "./ErrorReportTab";
import ReportsListTab from "./ReportsListTab";

const ReportsInfo = ({ active, title, subdomain }) => {
  if (active === "error_report")
    return <ErrorReportTab title={title} subdomain={subdomain} />;
  if (active === "reports_list") return <ReportsListTab title={title} subdomain={subdomain}/>;
};

export default ReportsInfo;
