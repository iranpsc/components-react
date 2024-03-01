import { BuyerContent, SidebarOptions } from "../../index";

import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  margin: 20px 0;
`;

const BuyerTab = () => {
  const [option, setOption] = useState(false);
  return (
    <Wrapper>
      <SidebarOptions option={option} setOption={setOption} />
      <BuyerContent option={option} />
    </Wrapper>
  );
};

export default BuyerTab;
