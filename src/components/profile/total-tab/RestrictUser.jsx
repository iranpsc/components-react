import {
  BiMessageDetail,
  BiMessageSquareDetail,
  BiVolumeMute,
} from "react-icons/bi";
import { FaCircle, FaEarDeaf } from "react-icons/fa6";

import { CiImageOn } from "react-icons/ci";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiUserForbidLine } from "react-icons/ri";
import styled from "styled-components";
import { useState } from "react";

const icons = [
  { id: 1, slug: "share", icon: <FiShare2 /> },
  { id: 2, slug: "user", icon: <RiUserForbidLine /> },
  { id: 3, slug: "comment", icon: <BiMessageDetail /> },
  { id: 4, slug: "pic", icon: <CiImageOn /> },
  { id: 5, slug: "location", icon: <FaEarDeaf /> },
  { id: 6, slug: "email", icon: <MdOutlineMailOutline /> },
  { id: 4, slug: "sound", icon: <BiVolumeMute /> },
  { id: 8, slug: "message", icon: <BiMessageSquareDetail /> },
  { id: 9, slug: "record", icon: <FaCircle /> },
];

const Container = styled.div`
  border: 1px solid #454545;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`;
const Title = styled.h2`
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 15px;
  svg {
    color: #949494;
  }
`;
const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isActive }) => (isActive ? "#ff000029" : "#1a1a18")};
  svg {
    font-size: 20px;
    color: ${({ isActive }) => (isActive ? "#f44545ab" : "#949494")};
  }
  cursor: pointer;
`;
const RestrictUser = () => {
  const [options, setOptions] = useState({
    record: false,
    message: true,
    sound: true,
    email: false,
    location: false,
    pic: false,
    comment: false,
    user: false,
    share: true,
  });

  const handleIconClick = (slug) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [slug]: !prevOptions[slug],
    }));
  };

  return (
    <Container>
      <Title>محدود کردن کاربر</Title>
      <Icons>
        {icons.map((icon) => (
          <IconWrapper
            isActive={options[icon.slug]}
            onClick={() => handleIconClick(icon.slug)}
            key={icon}
          >
            {icon.icon}
          </IconWrapper>
        ))}
      </Icons>
    </Container>
  );
};

export default RestrictUser;
