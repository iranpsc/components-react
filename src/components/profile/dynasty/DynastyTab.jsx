import DynastyEstablishEstate from "./dynasty-establish/DynastyEstablishEstate";
import DynastyMembers from "./DynastyMembers";
import ReceiveRequest from "./ReceiveRequest";
import SendRequest from "./SendRequest";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  /* margin: 20px 0; */
`;

const DynastyTab = () => {
  const [menu, setMenu] = useState(1);
  const [dynastyEstablishEstate, setDynastyEstablishEstate] = useState(1);
  return (
    <Container>
      <Sidebar setMenu={setMenu} menu={menu} mode={dynastyEstablishEstate}/>
      {menu === 1 && <DynastyEstablishEstate mode={dynastyEstablishEstate}/>}
      {menu === 2 && <DynastyMembers />}
      {menu === 3 && <SendRequest />}
      {menu === 4 && <ReceiveRequest />}
    </Container>
  );
};

export default DynastyTab;
