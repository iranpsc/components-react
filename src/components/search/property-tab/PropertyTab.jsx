import ResultCard from "./ResultCard";
import SearchInput from "../SearchInput";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
  height: 160px;
  overflow-y: auto;
  @media (min-width: 850px) {
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
    height: 500px;
  }
  @media (min-width: 1920px) {
    height: 820px;
  }
`;
const Container = styled.div`
  margin: 20px 0;
`;
const PropertyTab = () => {
  const [searched, setSearched] = useState("");

  return (
    <Container>
      <SearchInput
        onchange={(e) => setSearched(e.target.value)}
        value={searched}
        placeholder="شناسه ملک یا آدرس را جستجو کنید"
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
          {[...Array(4)].map((result, i) => (
            <ResultCard key={i} />
          ))}
        </Wrapper>
      )}
    </Container>
  );
};

export default PropertyTab;
