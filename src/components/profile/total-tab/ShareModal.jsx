import { FaFacebook, FaSquareWhatsapp, FaTelegram } from "react-icons/fa6";

import { AiFillTwitterCircle } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import styled from "styled-components";
import { useState } from "react";

const BackGround = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.713);
`;
const Modal = styled.div`
  border-radius: 10px;
  background-color: #1a1a18;
  border: 1px solid gray;
  direction: rtl;
  overflow-y: auto;
  padding: 20px;
  width: 380px;
  max-height: 577px;
  @media (min-width: 1023px) {
    width: 480px;
    overflow-y: auto;
  }
`;
const Close = styled.h4`
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
const Header = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  color: white;
  margin-bottom: 20px;
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  gap: 30px;
  span {
    color: ${(props) => props.color};
    svg {
      font-size: 40px;
      border-radius: 100%;
    }
  }
`;
const Icon = styled.div`
  color: ${(props) => props.color};
  position: relative;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  div {
    width: 33px;
    height: 35px;
    border-radius: 100%;
    background-color: wheat;
    position: absolute;
    z-index: -5;
  }
`;
const ColoredIcon = styled.span`
  span {
    color: white;
    font-size: 12px;
  }
`;
const Copy = styled.div`
  background-color: black;
  border-radius: 10px;
  margin-top: 40px;
  padding: 5px 5px 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    border-radius: 20px;
    background-color: #ffc700;
    padding: 0 20px;
    cursor: pointer;
    color: black;
  }
  p {
    color: white;
  }
`;

const socials = [
  { id: 1, color: "green", name: "whatsapp", icon: <FaSquareWhatsapp /> },
  { id: 2, color: "#3372ef", name: "telegram", icon: <FaTelegram /> },
  { id: 3, color: "blue", name: "facebook", icon: <FaFacebook /> },
  { id: 4, color: "#3372ef", name: "twitter", icon: <AiFillTwitterCircle /> },
  { id: 5, color: "#144bb8", name: "linkedin", icon: <ImLinkedin /> },
];
const ShareModal = ({ setOpenShare }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const textToCopy = "https://google.com";

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error("کپی نشد: ", error);
      });
  };
  return (
    <BackGround>
      <Modal>
        <Header>
          <Close onClick={() => setOpenShare(false)}>X</Close>
          <span>اشتراک گذاری شهروند</span>
          <div />
        </Header>
        <Socials>
          {socials.map((item) => (
            <ColoredIcon key={item.id}>
              <Icon color={item.color}>
                <div />
                {item.icon}
              </Icon>
              <span>{item.name}</span>
            </ColoredIcon>
          ))}
        </Socials>
        <Copy>
          <span onClick={handleCopy}>{copied ? "کپی شد" : "کپی"}</span>
          <p>https://google.com</p>
        </Copy>
      </Modal>
    </BackGround>
  );
};

export default ShareModal;
