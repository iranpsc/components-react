import Follower from "./Follower";
import SearchInput from "../../search/SearchInput";
import Title from "../../Title";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div``;
const List = styled.div`
  padding: 20px 0;
  direction: ltr;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  height: 102px;
  @media (min-width: 840px) {
    height: 131px;
  }
  @media (min-width: 890px) {
    height: 155px;
  }
  @media (min-width: 900px) {
    height: 153px;
  }
  @media (min-width: 930px) {
    height: 172px;
  }
  @media (min-width: 1024px) {
    height: 256px;
  }
  @media (min-width: 1180px) {
    height: 453px;
  }
  @media (min-width: 1280px) {
    height: 436px;
  }
  @media (min-width: 1366px) {
    height: 497px;
  }
  @media (min-width: 1400px) {
    height: 415px;
  }
  @media (min-width: 1920px) {
    height: 494px;
  }
`;

const followers_items = [
  { id: 1, name: "Ali Madani Far" },
  { id: 2, name: "Amir Madani Far" },
  { id: 3, name: "nader Madani Far" },
  { id: 4, name: "mohammad Madani Far" },
  { id: 5, name: "yusef Madani Far" },
  { id: 6, name: "shahin Madani Far" },
];

const Followers = () => {
  const [followers, setFollowers] = useState(followers_items);
  const [searched, setSearched] = useState("");
  const filteredItems = followers.filter((item) =>
    item.name.toLowerCase().includes(searched.toLowerCase())
  );
  return (
    <Container>
      <div style={{ marginBottom: "20px" }}>
        <Title title="پیروان" />
      </div>
      <SearchInput
        placeholder="جستجو کنید..."
        value={searched}
        onchange={(e) => setSearched(e.target.value)}
      />
      <List>
        {filteredItems.map((item) => (
          <Follower
            key={item.id}
            {...item}
            setFollowers={setFollowers}
            followers={followers}
          />
        ))}
      </List>
    </Container>
  );
};

export default Followers;
