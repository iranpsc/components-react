import { BiEditAlt } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";
import Result from "./Result";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 5px;
  background-color: #1a1a18;
  padding: 15px;
  display: grid;
  grid-template-columns: 4fr 1fr;
`;

const Results = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
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

const ResultInfo = ({ setAssign }) => {
  return (
    <Wrapper>
      <Results>
        <Result title="قیمت فروش(ریال)" value={1927262} />
        <Result title="قیمت فروش(PSC)" value={22211} />
        <Result title="قیمت نهایی" value="7,670,250 IRR / 8,521.8 PSC" />
        <Result title="کارمزد" value={5} />
      </Results>
      <Actions>
        <ActionWrapper>
          <HiOutlineTrash size={20} />
        </ActionWrapper>
        <ActionWrapper onClick={() => setAssign(false)}>
          <BiEditAlt size={20} />
        </ActionWrapper>
      </Actions>
    </Wrapper>
  );
};

export default ResultInfo;
