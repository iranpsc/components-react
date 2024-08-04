import Header from "../components/Header";
import SearchResults from "../components/search/SearchResults";
import Tabs from "../components/Tabs";
import ThinModal from "../components/ThinModal";
import { useState } from "react";

const Search = () => {
  const [active, setActive] = useState("citizen");
  const tabs = [
    { key: "citizen", label: "جستجوی شهروند" },
    { key: "property", label: "جستجوی ملک" },
  ];
  return (
    <ThinModal position="left">
      <Header title="جستجوی مرکزی" />
      <Tabs tabs={tabs} active={active} setActive={setActive} />
      <SearchResults active={active} />
    </ThinModal>
  );
};

export default Search;
