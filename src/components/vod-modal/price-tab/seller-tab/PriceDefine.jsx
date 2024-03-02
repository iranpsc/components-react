import FillInputs from "./FillInputs";
import ResultInfo from "../../../ResultInfo";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  @media (min-width: 600px) {
    height: 40vh;
    overflow-y: auto;
  }
  @media (min-width: 800px) {
    height: auto;
  }
`;

const Text = styled.p`
  color: #ffffff;
  line-height: 1.5rem;
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
