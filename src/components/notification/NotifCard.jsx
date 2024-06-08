import { IoNotificationsOutline } from "react-icons/io5";
import { TbTrash } from "react-icons/tb";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  border-radius: 5px;
  background-color: #1a1a18;
  direction: rtl;
  p {
    color: #a0a0ab;
    font-size: 14px;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #3b3b3b;
  svg {
    color: #949494;
  }
`;

const NameAndDate = styled.div`

  h2 {
    color: #dedee9;
    font-size: 16px;
    font-weight: 500;
  }
  h3 {
    font-size: 14px;
    color: #a0a0ab;
  }
`;

const TrashWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3b0808;
  cursor: pointer;
  svg {
    color: #ff0000;
  }
`;

const NotifCard = ({ id, setNotifications, notifications }) => {
  const handleDeleteNotification = () => {
    const filteredNotifications = notifications.filter(
      (notif) => notif.id !== id
    );
    setNotifications(filteredNotifications);
  };

  return (
    <Container>
      <Profile>
        <Info>
          <IconWrapper>
            <IoNotificationsOutline size={30} />
          </IconWrapper>
          <NameAndDate>
            <h2>لورم ایپسوم متن </h2>
            <h3>۱۴۰۲/۱۰/۲۰</h3>
          </NameAndDate>
        </Info>
        <TrashWrapper onClick={handleDeleteNotification}>
          <TbTrash size={20} />
        </TrashWrapper>
      </Profile>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است....
      </p>
    </Container>
  );
};

export default NotifCard;
