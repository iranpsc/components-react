import RecievedSuggestion from "./recieved/RecievedSuggestion";
import SentSuggestion from "./sent/SentSuggestion";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  /* margin: 20px 0; */
`;

const SuggestionTab = () => {
  const [menu, setMenu] = useState(1);
  return (
    <Container>
      <Sidebar setMenu={setMenu} menu={menu} />
      {menu === 1 && <RecievedSuggestion />}
      {menu === 2 && <SentSuggestion />}
    </Container>
  );
};

export default SuggestionTab;
