import ButtonIcon from "../../ButtonIcon";
import { TiUserAddOutline } from "react-icons/ti";
import avatar from "../../../assets/images/profile/slide.png";
import styled from "styled-components";
import { useState } from "react";

const Button = styled.div`
  font-size: 16px;
  color: ${(props) => (props.gray ? "#949494" : "#c30000")};
  font-weight: 600;
  background-color: ${(props) => (props.gray ? "#3B3B3B" : "#c3000026")};
  border-radius: 10px;
  padding: 12px 22px;
  cursor: pointer;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  &:hover img {
    box-shadow: 0px 10px 25px -5px #0066ff40;
    border: 2px solid #0066ff;
  }
  h3 {
    color: #dedee9;
    font-size: 18px;
    font-weight: 500;
  }
  a {
    text-decoration: none;
    color: #0066ff;
    font-size: 16px;
    font-weight: 500;
  }
  img {
    border-radius: 100%;
    border: 2px solid transparent;
    transition: all 0.2s linear;
  }
`;
const Card = styled.div`
  display: flex;
  direction: rtl;
  align-items: center;
  justify-content: space-between;
  background-color: #1a1a18;
  border-radius: 10px;
  padding: 15px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;
  @media (min-width: 1300px) {
    flex-direction: row;
  }
`;
const Follower = ({ id, followers, setFollowers, name }) => {
  const [follow, setFollow] = useState(true);
  const deleteHandler = () => {
    setFollowers(followers.filter((item) => item.id !== id));
  };
  return (
    <Card>
      <Profile>
        <img src={avatar} width={80} height={80} />
        <div>
          <h3>{name}</h3>
          <a href="https://rgb.irpsc.com/fa/citizen/hm-2000001">HM-200020</a>
        </div>
      </Profile>
      <Buttons>
        {follow ? (
          <Button onClick={() => setFollow(false)} gray>
            آنفالو کردن
          </Button>
        ) : (
          <ButtonIcon
            onclick={() => setFollow(true)}
            fill
            label="دنبال کردن"
            icon={<TiUserAddOutline size={24} />}
          />
        )}
        <Button onClick={deleteHandler}>حذف کردن</Button>
      </Buttons>
    </Card>
  );
};

export default Follower;
