import FillInputs from "./FillInputs";
import ResultInfo from "../../../ResultInfo";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  direction: ltr;
  padding-right: 15px;
  gap: 30px;
  width: 100%;
  @media (max-width: 1024px) {
    height: 60vh !important;
    overflow: auto;
  }
  @media (min-width: 1023px) {
    height: auto !important;
  }
`;

const Text = styled.p`
  color: #ffffff;
  line-height: 1.5rem;
  direction: rtl;
`;

const PriceDefine = () => {
  const [assign, setAssign] = useState(false);
  const [rial, setRial] = useState("0");
  const [psc, setPsc] = useState("0");
  return (
    <Wrapper>
      <Text>
        شما می توانید ملک خود را به دو صورت ریال و pSC قیمت گذاری نمایید{" "}
      </Text>
      {!assign && (
        <FillInputs
          rial={rial}
          setRial={setRial}
          psc={psc}
          setPsc={setPsc}
          setAssign={setAssign}
        />
      )}
      {assign && <ResultInfo rial={rial} psc={psc} setAssign={setAssign} />}
    </Wrapper>
  );
};

export default PriceDefine;
