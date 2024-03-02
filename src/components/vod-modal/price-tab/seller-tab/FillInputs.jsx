import Button from "../../../Button";
import Input from "../../../Input";
import TitleValue from "../../../TitleValue";
import styled from "styled-components";

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 0 0 20px;
  @media (min-width: 600px) {
    flex-direction: row;
    padding-left: 0;
  }
`;

const ResultWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  @media (min-width: 600px) {
    grid-template-columns: 3fr 2fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 4fr 1fr;
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

const FillInputs = ({ setAssign, rial, setRial, psc, setPsc }) => {
  const priceHandler = () => {
    if (rial > 0 && psc > 0) {
      setAssign(true);
    }
  };

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
        <Wrapper>
          <Title>قیمت نهایی</Title>
          <Value>
            {rial}IRR / {psc} PSC
          </Value>
        </Wrapper>
        <TitleValue title="کارمزد" value="5%" />
      </ResultWrapper>
      <Button label="ثبت قیمت" onclick={priceHandler} />
    </>
  );
};

export default FillInputs;
