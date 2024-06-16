import NotifCard from "./NotifCard";
import styled from "styled-components";
import { useState } from "react";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  direction: ltr;
  padding-right: 15px;
  height: 268px;
  @media (min-width: 1000px) {
    height: 438px;
  }
`;
const Container = styled.div`
  h4 {
    color: #dedee9;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    text-align: left;
    cursor: pointer;
    margin-top: 10px;
  }
`;
const notifs = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const Notifications = ({ setIsNotif }) => {
  const [notifications, setNotifications] = useState(notifs);
  return (
    <Container>
      <h4 onClick={() => setIsNotif(false)}>حذف همه</h4>
      <Div>
        {notifications.map((notif) => (
          <NotifCard
            setNotifications={setNotifications}
            notifications={notifications}
            key={notif.id}
            id={notif.id}
          />
        ))}
      </Div>
    </Container>
  );
};

export default Notifications;
