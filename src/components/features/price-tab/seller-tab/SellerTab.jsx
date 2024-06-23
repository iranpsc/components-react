import { SellerContent, SidebarOptions } from "../../index";

import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const SellerTab = ({seller}) => {
  const [option, setOption] = useState(true);
  return (
    <Wrapper>
      <SidebarOptions seller={seller} option={option} setOption={setOption} />
      <SellerContent option={option} />
    </Wrapper>
  );
};

export default SellerTab;
