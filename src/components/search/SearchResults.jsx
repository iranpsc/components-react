import CitizenTab from "./citizen-tab/CitizenTab";
import PropertyTab from "./property-tab/PropertyTab";

const SearchResults = ({ active }) => {
  if (active === "property") return <PropertyTab />;
  if (active === "citizen") return <CitizenTab />;
};

export default SearchResults;
