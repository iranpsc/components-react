import PropertyCard from "./PropertyCard";
import SearchInput from "../../../SearchInput";
import Title from "../../../Title";
import styled from "styled-components";

const Container = styled.div`
direction: rtl;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  @media (min-width: 1366px) {
    max-height: 565px;
    overflow-y: auto;
    padding-left: 15px;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PropertySelect = ({ setMode }) => {
  return (
    <Container>
      <Top>
        <Title title="انتخاب ملک" />
        <SearchInput
          placeholder="جستجو شناسه..."
          onchange={() => {}}
          value=""
        />
      </Top>
      <Div>
        {[...Array(10)].map((item) => (
          <PropertyCard onClick={() => setMode(2)} label='انتخاب' key={item} />
        ))}
      </Div>
    </Container>
  );
};

export default PropertySelect;
