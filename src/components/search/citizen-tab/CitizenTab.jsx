import ResultCard from "./ResultCard";
import SearchInput from "../../SearchInput";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 0 0 0;
  @media (min-width: 1920px) {
    margin-bottom: -10px;
  }
`;
const Container = styled.div`
  direction: ltr;
  padding: 20px 15px 20px 0;
  height: 240px;
  overflow-y: auto;
  @media (min-width: 720px) {
    height: 405px;
  }
  @media (min-width: 740px) {
    height: 225px;
  }
  @media (min-width: 840px) {
    height: 256px;
  }
  @media (min-width: 882px) {
    height: 216px;
  }
  @media (min-width: 890px) {
    height: 285px;
  }
  @media (min-width: 930px) {
    height: 300px;
  }
  @media (min-width: 1024px) {
    height: 410px;
  }
  @media (min-width: 1280px) {
    height: 620px;
  }
  @media (min-width: 1366px) {
    height: 845px;
  }
  @media (min-width: 1400px) {
    height: 585px;
  }
  @media (min-width: 1920px) {
    height: 720px;
  }
`;

const CitizenTab = () => {
  const [searched, setSearched] = useState("");
  return (
    <Container>
      <SearchInput
        onchange={(e) => setSearched(e.target.value)}
        value={searched}
        placeholder="شناسه شهروند یا نام را جستجو کنید"
      />
      {searched === "" ? (
        <p
          style={{
            color: "#DEDEE9",
            fontWeight: "500",
            textAlign: "center",
            marginTop: "20px",
            fontSize: "18px",
          }}
        >
          اطلاعات موجود نمی باشد جستجو کنید
        </p>
      ) : (
        <Wrapper>
          {[...Array(4)].map((_, i) => (
            <ResultCard key={i} />
          ))}
        </Wrapper>
      )}
    </Container>
  );
};

export default CitizenTab;
