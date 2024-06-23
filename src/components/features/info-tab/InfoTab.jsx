import { Album, FirstRow, SecondRow, ThirdRow } from "../index";

import styled from "styled-components";

const RowsWrapper = styled.div`
  padding-top: 20px;
  overflow-y: auto;
  height: 70%;
  padding-right: 15px;
  padding-bottom: 20px !important;
  direction: ltr;
  @media (max-width: 1024px) and (max-height: 600px) {
    height: 70% !important;
  }
  @media (min-width: 840px) {
    height: 65% !important;
  }
  @media (min-width: 1024px) {
    height: 100%;
  }
  @media (min-width: 1370px) {
    height: 80% !important;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  direction: rtl;
`;

const InfoTab = () => {
  return (
    <RowsWrapper>
      <Div>
        <FirstRow />
        <SecondRow />
        <ThirdRow />
      </Div>
      <Album />
    </RowsWrapper>
  );
};

export default InfoTab;
