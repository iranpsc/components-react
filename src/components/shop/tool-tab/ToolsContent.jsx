import Alert from "../../Alert";
import { AlertContext } from "../../../App";
import InfoRow from "../InfoRow";
import Title from "../../Title";
import styled from "styled-components";
import { useContext } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  direction: ltr;
  gap: 20px;
  margin-top: 20px;
  @media (max-width:850px) {
    height: 52% !important;
  }
  @media (max-width: 1023px) {
    height: 53%;
    overflow-y: auto;
  }
`;
const ToolsContent = ({ option, tools }) => {
  const toolContent = tools.find((tool) => tool.id === option);
  const { alert } = useContext(AlertContext);

  return (
    <div>
      {alert && <Alert type="success" text="خرید شما با موفقیت انجام شد" />}
      <Title title="ابزارها" />
      <Wrapper>
        {toolContent.items.map((item) => (
          <InfoRow type="ابزار" key={item.id} data={item} />
        ))}
      </Wrapper>
      ;
    </div>
  );
};

export default ToolsContent;
