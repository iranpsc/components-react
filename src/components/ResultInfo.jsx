import { BiEditAlt } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";
import Result from "./Result";
import { convertToPersian } from "../lib/convertToPersian";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 5px;
  background-color: #1a1a18;
  padding: 15px;
  display: grid;
  direction: rtl;
  grid-template-columns: 4fr 1fr;
`;

const Results = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1.4fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 2fr 2fr 1fr;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    justify-content: end;
  }
`;

const ActionWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc700;
  cursor: pointer;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  @media (min-width: 1200px) {
    align-items: center;
  }
`;

const Title = styled.h3`
  color: #a0a0ab;
  font-size: 14px;
  font-weight: 500;
`;

const Value = styled.p`
  color: #dedee9;
  font-size: 16px;
  font-weight: 400;
`;

const ResultInfo = ({ setAssign, rial, psc, setPsc, setRial }) => {
  const deleteHandler = () => {
    setPsc('');
    setRial('');
    setAssign(false);
  };
  return (
    <Wrapper>
      <Results>
        <Result title="قیمت فروش(ریال)" value={rial} />
        <Result title="قیمت فروش(PSC)" value={psc} />
        <ResultWrapper>
          <Title>قیمت نهایی</Title>
          <Value dir="ltr">
            {convertToPersian(rial)} IRR /{" "}
            {convertToPersian(psc)} PSC
          </Value>
        </ResultWrapper>
        <Result title="کارمزد" value={"5%"} />
      </Results>
      <Actions>
        <ActionWrapper onClick={() => setAssign(false)}>
          <BiEditAlt size={20} />
        </ActionWrapper>
        <ActionWrapper onClick={deleteHandler}>
          <HiOutlineTrash size={20} />
        </ActionWrapper>
      </Actions>
    </Wrapper>
  );
};

export default ResultInfo;
