import NotifCard from "./NotifCard";
import styled from "styled-components";
import { useState } from "react";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  height: 260px;
  @media (min-width: 1024px) {
    height: 220px;
  }
  @media (min-width: 1400px) {
    height: 425px;
  }
`;
const Container = styled.div`
  h3 {
    color: #dedee9;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    cursor: pointer;
    margin-top: 10px;
  }
`;
const notifs = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const Notifications = ({ setIsNotif }) => {
  const [notifications, setNotifications] = useState(notifs);
  return (
    <Container>
      <h3 onClick={() => setIsNotif(false)}>حذف همه</h3>
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
