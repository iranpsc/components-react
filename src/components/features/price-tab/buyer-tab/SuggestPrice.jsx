import FillInputs from "./FillInputs";
import ResultInfo from "../../../ResultInfo";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  @media (max-width: 1024px) {
    height: 67vh !important;
    overflow: auto;
  }
  @media (min-width: 1025px) {
    height: auto !important;
  }
`;

const Text = styled.p`
  color: #ffffff;
  line-height: 1.5rem;
`;

const SuggestPrice = () => {
  const [assign, setAssign] = useState(false);
  const [rial, setRial] = useState(0);
  const [psc, setPsc] = useState(0);
  return (
    <Wrapper>
      <Text>قیمت پیشنهادی شما </Text>
      {!assign && (
        <FillInputs
          rial={rial}
          psc={psc}
          setRial={setRial}
          setPsc={setPsc}
          setAssign={setAssign}
        />
      )}
      {assign && <ResultInfo rial={rial} psc={psc} setAssign={setAssign} />}
    </Wrapper>
  );
};

export default SuggestPrice;
