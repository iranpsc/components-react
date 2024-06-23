import Alert from "../../Alert";
import { AlertContext } from "../../../App";
import InfoRow from "../InfoRow";
import Title from "../../Title";
import styled from "styled-components";
import { useContext } from "react";

const Container = styled.div`
  direction: ltr;
  text-align: right;
  padding: 20px 0;
  padding-right: 15px;
  @media (max-width: 850px) {
    height: 75% !important;
  }
  @media (max-width: 1023px) {
    height: 65%;
    overflow-y: auto;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
  gap: 20px;
  margin-top: 20px;
`;
const ToolsContent = ({ option, tools }) => {
  const toolContent = tools.find((tool) => tool.id === option);
  const { alert } = useContext(AlertContext);

  return (
    <Container>
      {alert && <Alert type="success" text="خرید شما با موفقیت انجام شد" />}
      <Title title="ابزارها" />
      <Wrapper>
        {toolContent.items.map((item) => (
          <InfoRow shop type="ابزار" key={item.id} data={item} />
        ))}
      </Wrapper>
      ;
    </Container>
  );
};

export default ToolsContent;
