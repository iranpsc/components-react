import Modal from "./Modal";
import PropertyCard from "../dynasty-establish/PropertyCard";
import SearchInput from "../../../SearchInput";
import Title from "../../../Title";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  direction: rtl;
`;
const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
  @media (min-width: 1366px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Loader = styled.div`
  margin: 10px 0;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background-color: transparent;
    color: white;
    border: none;
  }
`;

const properties = [
  { id: 1, code: "QA31-13313", meter: "۱۲۰" },
  { id: 2, code: "QA31-14413", meter: "۱۲۰" },
  { id: 3, code: "QA31-15513", meter: "۱۲۰" },
  { id: 4, code: "QA31-16613", meter: "۱۲۰" },
  { id: 5, code: "QA31-17713", meter: "۱۲۰" },
  { id: 6, code: "QA31-18813", meter: "۱۲۰" },
  { id: 7, code: "QA31-19913", meter: "۱۲۰" },
  { id: 8, code: "QA31-16513", meter: "۱۲۰" },
  { id: 9, code: "QA31-17813", meter: "۱۲۰" },
  { id: 10, code: "QA31-19413", meter: "۱۲۰" },
  { id: 11, code: "QA31-19413", meter: "۱۲۰" },
  { id: 12, code: "QA31-19413", meter: "۱۲۰" },
  { id: 13, code: "QA31-19413", meter: "۱۲۰" },
  { id: 14, code: "QA31-19413", meter: "۱۲۰" },
  { id: 15, code: "QA31-19413", meter: "۱۲۰" },
  { id: 16, code: "QA31-19413", meter: "۱۲۰" },
  { id: 17, code: "QA31-19413", meter: "۱۲۰" },
  { id: 18, code: "QA31-19413", meter: "۱۲۰" },
  { id: 19, code: "QA31-19413", meter: "۱۲۰" },
  { id: 20, code: "QA31-19413", meter: "۱۲۰" },
  { id: 21, code: "QA31-19413", meter: "۱۲۰" },
  { id: 22, code: "QA31-19413", meter: "۱۲۰" },
  { id: 23, code: "QA31-19413", meter: "۱۲۰" },
  { id: 24, code: "QA31-19413", meter: "۱۲۰" },
];
const Convert = () => {
  const [modal, setModal] = useState(false);
  const [searched, setSearched] = useState("");
  const [visibleRows, setVisibleRows] = useState(6);
  const handleLoadMore = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 6);
  };
  const filteredProperties = properties.filter((property) =>
    property.code.includes(searched)
  );

  return (
    <Container>
      <Div>
        <Title title="انتقال ملک" />
        <SearchInput
          placeholder="جستجوی شناسه..."
          onchange={(e) => setSearched(e.target.value)}
          value={searched}
        />
      </Div>
      <Wrapper>
        {filteredProperties.slice(0, visibleRows).map((property) => (
          <PropertyCard
            onClick={() => setModal(true)}
            label="انتقال"
            key={property.id}
            code={property.code}
            meter={property.meter}
          />
        ))}
      </Wrapper>
        {visibleRows < filteredProperties.length && (
          <Loader>
            <button onClick={handleLoadMore}>نمایش موارد بیشتر</button>
          </Loader>
        )}
      {modal && <Modal setModal={setModal} />}
    </Container>
  );
};

export default Convert;
