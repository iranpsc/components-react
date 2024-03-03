import Button from "../../../Button";
import Input from "../../../Input";
import SuggestText from "./SuggestText";
import TitleValue from "../../../TitleValue";
import styled from "styled-components";

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 20px;
  @media (min-width: 600px) {
    flex-direction: row;
    padding-left: 0;
  }
`;

const ResultWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  @media (min-width: 998px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
  @media (min-width: 1300px) {
    grid-template-columns: 3fr 2fr 1fr;
  }
`;

const Wrapper = styled.div`
  display: flex;
  border-radius: 5px;
  height: 48px;
  border: 1px solid gray;
  font-weight: 400;
  color: #dedee9;
  overflow: hidden;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  height: fit-content;
  background-color: #1a1a18;
  padding: 8px 20px;
`;

const Value = styled.p`
  font-size: 18px;
  padding: 8px 20px;
`;

const Div = styled.div`
  height: 212px !important;
`;

const FillInputs = ({ setAssign, rial, setRial, psc, setPsc }) => {
  return (
    <>
      <InputsWrapper>
        <Input
          value={rial}
          onchange={(e) => setRial(e.target.value)}
          type="number"
          placeholder="پیشنهاد قیمت فروش (ریال)"
          insideText="ریال"
        />
        <Input
          value={psc}
          onchange={(e) => setPsc(e.target.value)}
          type="number"
          placeholder="پیشنهاد قیمت فروش (PSC)"
          insideText="PSC"
        />
      </InputsWrapper>
      <Div>
        <SuggestText />
      </Div>
      <ResultWrapper>
        <Wrapper>
          <Title>قیمت نهایی</Title>
          <Value>
            {rial}IRR / {psc} PSC
          </Value>
        </Wrapper>
        <TitleValue title="مانده" value="0" />
        <TitleValue title="کارمزد" value="5%" />
      </ResultWrapper>
      <Button label="ثبت پیشنهاد" onclick={() => setAssign(true)} />
    </>
  );
};

export default FillInputs;
