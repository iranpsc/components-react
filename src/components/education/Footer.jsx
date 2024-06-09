import { BiDislike, BiLike } from "react-icons/bi";

import { FaRegComment } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import styled from "styled-components";

const actions = [
  { id: 1, icon: <FaRegComment />, value: "42" },
  { id: 2, icon: <BiLike />, value: "125" },
  { id: 3, icon: <BiDislike />, value: "10" },
  { id: 4, icon: <IoEyeOutline />, value: "607" },
];
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #969696;
  border-top: 1px solid #2d2d2a;
  padding-top: 5px;
  svg {
    font-size: 18px;
  }
  span {
    font-size: 19px;
    font-weight: 500;
    padding-top: 2px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Footer = () => {
  return (
    <Container>
      <Right>
        <h3>HM-2000003</h3>
        <span>
          <TfiWrite />
        </span>
      </Right>
      <Left>
        {actions.map((item) => (
          <div key={item.id}>
            <h3>
              {item.value
                .toLocaleString()
                .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}{" "}
            </h3>
            <span>{item.icon}</span>
          </div>
        ))}
      </Left>
    </Container>
  );
};

export default Footer;
