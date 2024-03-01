import FillInputs from "./FillInputs";
import ResultInfo from "./ResultInfo";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

const Text = styled.p`
  color: #ffffff;
  line-height: 1.5rem;
`;

const PriceDefine = () => {
  const [assign, setAssign] = useState(false);
  return (
    <Wrapper>
      <Text>
        شما می توانید ملک خود را به دو صورت ریال و pSC قیمت گذاری نمایید{" "}
      </Text>
      {!assign && <FillInputs setAssign={setAssign} />}
      {assign && <ResultInfo setAssign={setAssign} />}
    </Wrapper>
  );
};

export default PriceDefine;
