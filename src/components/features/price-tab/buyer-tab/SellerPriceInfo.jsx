import Button from "../../../Button";
import Input from "../../../Input";
import TitleValue from "../../../TitleValue";
import pscGif from "../../../../assets/images/profile/psc.gif";
import rialGif from "../../../../assets/images/profile/rial.gif";
import styled from "styled-components";
import { useState } from "react";

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  direction: rtl;
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
  direction: rtl;
  @media (min-width: 600px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 4fr 1fr;
  }
`;

const RiCur = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SellerPriceInfo = () => {
  const [rial, setRial] = useState(50);
  const [psc, setPsc] = useState(57);

  const rialHtml = (
    <RiCur>
      <span>ریال</span>
      <img width={26} alt="rial" src={rialGif} />
    </RiCur>
  );

  const pscHtml = (
    <RiCur>
      <span>PSC</span>
      <img width={26} alt="psc" src={pscGif} />
    </RiCur>
  );

  return (
    <>
      <InputsWrapper>
        <Input
          disabled
          value={rial}
          onchange={(e) => setRial(e.target.value)}
          type="number"
          placeholder="قیمت فروش (ریال)"
          insideText={rialHtml}
        />
        <Input
          disabled
          value={psc}
          onchange={(e) => setPsc(e.target.value)}
          type="number"
          placeholder="قیمت فروش (PSC)"
          insideText={pscHtml}
        />
      </InputsWrapper>
      <ResultWrapper>
        <TitleValue title="قیمت نهایی" value="50 IRR / 57 PSC" />
        <TitleValue title="کارمزد" value="5%" />
      </ResultWrapper>
      <div dir="rtl">
        <Button label="خرید" onclick={() => {}} />
      </div>
    </>
  );
};

export default SellerPriceInfo;
