import { SellerContent, SidebarOptions } from "../../index";

import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  margin: 20px 0;
`;

const SellerTab = ({ role }) => {
  const [option, setOption] = useState(true);
  return (
    <Wrapper>
      <SidebarOptions role={role} option={option} setOption={setOption} />
      <SellerContent option={option} />
    </Wrapper>
  );
};

export default SellerTab;
