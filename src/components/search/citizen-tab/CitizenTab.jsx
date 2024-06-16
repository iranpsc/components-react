import ResultCard from "./ResultCard";
import SearchInput from "../SearchInput";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  direction: ltr;
  padding-right: 15px;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
  height: 190px;
  overflow-y: auto;
  @media (min-width: 840px) {
    height: 200px;
  }
  @media (min-width: 1024px) {
    height: 500px;
  }
  @media (min-width: 1180px) {
    height: 550px;
  }
  @media (min-width: 1366px) {
    height: 750px;
  }
  @media (min-width: 1400px) {
    height: 535px;
  }
  @media (min-width: 1920px) {
    height: 670px;
  }
`;
const Container = styled.div`
  margin: 20px 0;
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
            fontSize:'18px'
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
