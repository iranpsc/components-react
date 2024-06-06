import Header from "../components/Header";
import SearchResults from "../components/search/SearchResults";
import Tabs from "../components/search/Tabs";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
background-color: #000000;
  width: 450px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 15px 20px;
`;

const Search = () => {
  const [active, setActive] = useState("citizen");

  return (
    <Container>
      <Header title="جستجوی مرکزی" />
      <Tabs active={active} setActive={setActive} />
      <SearchResults active={active} />
    </Container>
  );
};

export default Search;
