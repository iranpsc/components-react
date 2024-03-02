import Button from "../../../Button";
import Input from "../../../Input";
import TitleValue from "../../../TitleValue";
import styled from "styled-components";
import { useState } from "react";

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  gap: 20px;
  @media (min-width: 600px) {
    padding-left: 0;
    flex-direction: row;
  }
`;

const ResultWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 4fr 1fr;
  }
`;

const SellerPriceInfo = () => {
  const [rial, setRial] = useState(50);
  const [psc, setPsc] = useState(57);

  return (
    <>
      <InputsWrapper>
        <Input
          disabled
          value={rial}
          onchange={(e) => setRial(e.target.value)}
          type="number"
          placeholder="قیمت فروش (ریال)"
          insideText="ریال"
        />
        <Input
          disabled
          value={psc}
          onchange={(e) => setPsc(e.target.value)}
          type="number"
          placeholder="قیمت فروش (PSC)"
          insideText="PSC"
        />
      </InputsWrapper>
      <ResultWrapper>
        <TitleValue title="قیمت نهایی" value="50IRR / 57 PSC" />
        <TitleValue title="کارمزد" value="5%" />
      </ResultWrapper>
      <Button label="خرید" onclick={() => {}} />
    </>
  );
};

export default SellerPriceInfo;
