import { Album, FirstRow, SecondRow, ThirdRow } from "../index";

import styled from "styled-components";

const RowsWrapper = styled.div`
  margin: 20px 0 0 0;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  @media (min-width: 600px) and (max-width: 800px) {
    min-height: 5vh;
    max-height: 32vh;
  }
  @media (min-width: 800px) {
    max-height: 73vh;
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
