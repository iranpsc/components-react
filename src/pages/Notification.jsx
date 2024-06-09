import Header from "../components/Header";
import NoNotification from "../components/notification/NoNotification";
import Notifications from "../components/notification/Notifications";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  background-color: #000000;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 15px 20px;
  overflow: hidden;
  margin: 0 auto;
  width: 500px;
  border-radius: 10px;
  height: ${(props) => (props.isNotif ? "340px" : "240px")};
  @media (min-width: 1000px) {
    height: ${(props) => (props.isNotif ? "550px" : "450px")};
    margin-right: 100px;
  }
`;

const Notification = () => {
  const [isNotif, setIsNotif] = useState(true);
  return (
    <Container isNotif={isNotif}>
      <Header title="اعلان ها" />
      {isNotif ? <Notifications setIsNotif={setIsNotif} /> : <NoNotification />}
    </Container>
  );
};

export default Notification;
