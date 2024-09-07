import PropertyCard from "./PropertyCard";
import SearchInput from "../../../SearchInput";
import Title from "../../../Title";
import styled from "styled-components";
import { useState } from "react";

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

const properties = [
  { id: 1, code: "QA31-13313", meter: '۱۲۰' },
  { id: 2, code: "QA31-14413", meter: '۱۲۰' },
  { id: 3, code: "QA31-15513", meter: '۱۲۰' },
  { id: 4, code: "QA31-16613", meter: '۱۲۰' },
  { id: 5, code: "QA31-17713", meter: '۱۲۰' },
  { id: 6, code: "QA31-18813", meter: '۱۲۰' },
  { id: 7, code: "QA31-19913", meter: '۱۲۰' },
  { id: 8, code: "QA31-16513", meter: '۱۲۰' },
  { id: 9, code: "QA31-17813", meter: '۱۲۰' },
  { id: 10, code: "QA31-19413", meter: '۱۲۰' },
];

const PropertySelect = ({ setMode }) => {
  const [searched, setSearched] = useState("");

  const filteredProperties = properties.filter((property) =>
    property.code.includes(searched)
  );

  return (
    <Container>
      <Top>
        <Title title="انتخاب ملک" />
        <SearchInput
          placeholder="جستجو شناسه..."
          onchange={(e) => setSearched(e.target.value)}
          value={searched}
        />
      </Top>
      <Div>
        {filteredProperties.map((property) => (
          <PropertyCard
            onClick={() => setMode(2)}
            label="انتخاب"
            key={property.id}
            code={property.code}
            meter={property.meter}
          />
        ))}
      </Div>
    </Container>
  );
};

export default PropertySelect;
