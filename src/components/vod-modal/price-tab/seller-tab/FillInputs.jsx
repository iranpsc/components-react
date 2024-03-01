import Button from "../../../Button";
import Input from "../../../Input";
import TitleValue from "../../../TitleValue";
import styled from "styled-components";
import { useState } from "react";

const InputsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const ResultWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 20px;
  width: 100%;
`;

const FillInputs = ({ setAssign }) => {
  const [rial, setRial] = useState("");
  const [psc, setPsc] = useState("");

  return (
    <>
      <InputsWrapper>
        <Input
          value={rial}
          onchange={(e) => setRial(e.target.value)}
          type="number"
          placeholder="قیمت فروش (ریال)"
          insideText="ریال"
        />
        <Input
          value={psc}
          onchange={(e) => setPsc(e.target.value)}
          type="number"
          placeholder="قیمت فروش (PSC)"
          insideText="PSC"
        />
      </InputsWrapper>
      <ResultWrapper>
        <TitleValue title="قیمت نهایی" value="7670250 IRR / 8521.8 PSC" />
        <TitleValue title="کارمزد" value="5%" />
      </ResultWrapper>
      <Button label="ثبت قیمت" onclick={() => setAssign(true)} />
    </>
  );
};

export default FillInputs;
