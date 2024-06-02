import { Album, FirstRow, SecondRow, ThirdRow } from "../index";

import styled from "styled-components";

const RowsWrapper = styled.div`
  margin: 25px 0 0 0;
  overflow-y: auto;
  height: 70%;
  direction: ltr;
  @media (max-width: 1024px) and (max-height: 600px) {
    height: 70% !important;
  }
  @media (min-width: 1024px) {
    height: 100%;
  }
  @media (min-width: 1370px) {
    height: 77%;
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
