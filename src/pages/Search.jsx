import Header from "../components/Header";
import SearchResults from "../components/search/SearchResults";
import Tabs from "../components/search/Tabs";
import ThinModal from "../components/ThinModal";
import { useState } from "react";

const Search = () => {
  const [active, setActive] = useState("citizen");

  return (
    <ThinModal position='left'>
      <Header title="جستجوی مرکزی" />
      <Tabs active={active} setActive={setActive} />
      <SearchResults active={active} />
    </ThinModal>
  );
};

export default Search;
