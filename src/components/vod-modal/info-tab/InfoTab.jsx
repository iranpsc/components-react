import { Album, FirstRow, SecondRow, ThirdRow } from "../index";

import styled from "styled-components";

const RowsWrapper = styled.div`
  margin: 20px 0 0 0;
  height: 72vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
`;

const InfoTab = () => {
  return (
    <RowsWrapper>
      <FirstRow />
      <SecondRow />
      <ThirdRow />
      <Album />
    </RowsWrapper>
  );
};

export default InfoTab;
