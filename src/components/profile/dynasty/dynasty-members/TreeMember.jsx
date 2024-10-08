import chat from "../../../../assets/images/profile/chat.png";
import member from "../../../../assets/images/profile/slide.png";
import styled from "styled-components";

const Container = styled.div`
  background-color: #1a1a18;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  z-index: 10;
  width: 120px;
  position: relative;

  &:not(:first-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    width: 10px;
    height: 2px;
    background-color: #bababa;
  }

  h3 {
    color: #dedee9;
    font-size: 16px;
    font-weight: 600;
  }
  a {
    text-decoration: none;
    color: #0066ff;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Image = styled.div`
  position: relative;
  img {
    border-radius: 100%;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  &:hover img {
    &:nth-of-type(2) {
      box-shadow: 0px 10px 25px -5px #0066ff40;
      border: 2px solid #0066ff;
    }
  }
`;

const Status = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background-color: #18c08f;
  position: absolute;
  bottom: 5px;
  right: 10px;
  border: 2px solid #1a1a18;
`;

const Chat = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const TreeMember = ({ item }) => {
  return (
    <Container>
      <Image>
        <Status />
        <Chat src={chat} width={28} height={28} alt="chat" />
        <img src={member} alt="member" width={80} height={80} />
      </Image>
      <h3>{item.role}</h3>
      <a href="https://rgb.irpsc.com/fa/citizen/hm-2000001">{item.code}</a>
    </Container>
  );
};

export default TreeMember;
