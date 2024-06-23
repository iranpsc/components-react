import { BiCommentDots } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { TiUserAddOutline } from "react-icons/ti";
import styled from "styled-components";

const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background-color: #ffc700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    font-size: 20px;
    color: #191b21;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15px;
`;
const items = [
  { id: 1, icon: <TiUserAddOutline />, label: "درخواست دوستی" },
  { id: 2, icon: <BiCommentDots />, label: "چت آنلاین" },
  { id: 3, icon: <MdOutlineMailOutline />, label: "ارسال پیام" },
];
const Buttons = () => {
  return (
    <Container>
      {items.map((item) => (
        <div key={item.id}>
          <IconWrapper data-tooltip-id={item.label}>{item.icon}</IconWrapper>
          <ReactTooltip style={{backgroundColor:'#434343'}} id={item.label} place="right" content={item.label} />
        </div>
      ))}
    </Container>
  );
};

export default Buttons;
