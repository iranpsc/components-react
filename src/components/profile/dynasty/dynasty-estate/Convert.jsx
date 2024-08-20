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

const Convert = () => {
  const [modal, setModal] = useState(false);
  return (
    <Container>
      <Div>
        <Title title="انتقال ملک" />
        <SearchInput placeholder="جستجوی شناسه..." />
      </Div>
      <Wrapper>
        <PropertyCard label="انتقال" onClick={() => setModal(true)} />
        <PropertyCard label="انتقال" onClick={() => setModal(true)} />
        <PropertyCard label="انتقال" onClick={() => setModal(true)} />
        <PropertyCard label="انتقال" onClick={() => setModal(true)} />
        <PropertyCard label="انتقال" onClick={() => setModal(true)} />
        <PropertyCard label="انتقال" onClick={() => setModal(true)} />
      </Wrapper>
      {modal && <Modal setModal={setModal} />}
    </Container>
  );
};

export default Convert;
