import { HiOutlineUser } from "react-icons/hi";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3b3b3b;
  color: #949494;
`;
const Info = styled.div`
  h2 {
    font-weight: 500;
    color: #dedee9;
    font-size: 16px;
  }
  a {
    font-size: 14px;
    color: #0066ff;
    text-decoration: none;
  }
`;

const Profile = () => {
  return (
    <Container>
      <IconWrapper>
        <HiOutlineUser size={30}/>
      </IconWrapper>
      <Info>
        <h2>shahmohammadi.sara002</h2>
        <a href="">HM-2000081</a>
      </Info>
    </Container>
  );
};

export default Profile;
