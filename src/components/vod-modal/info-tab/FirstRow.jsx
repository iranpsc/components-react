import { BsCardChecklist } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineHome } from "react-icons/md";
import styled from "styled-components";

const first_row_info = [
  { id: 1, title: "شناسه ملک", value: "QA31-10789", icon: <MdOutlineHome /> },
  { id: 2, title: "صاحب ملک", value: "QA31-10789", icon: <HiOutlineUser /> },
  { id: 3, title: "وضعیت", value: "QA31-10789", icon: <BsCardChecklist /> },
];

const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Item = styled.div`
  border-radius: 5px;
  border: 1px solid #454545;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 48px;
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  gap: 10px;
  border-left: 1px solid #454545;
  background-color: #1a1a18;
  padding: 10px;
  height: 100%;
  svg {
    font-size: 20px;
    color: #dedee9;
  }
`;

const Title = styled.div`
  color: #dedee9;
  font-size: 16px;
  font-weight: 400;
`;

const Value = styled.span`
  color: #dedee9;
  font-size: 12px;
  font-weight: 400;
  padding: 10px 15px;
  @media (min-width: 460px) {
    font-size: 18px;
  }
`;

const FirstRow = () => {
  return (
    <RowWrapper>
      {first_row_info.map((item) => (
        <Item key={item.id}>
          <InfoIcon>
            {item.icon}
            <Title>{item.title}</Title>
          </InfoIcon>
          <Value>{item.value}</Value>
        </Item>
      ))}
    </RowWrapper>
  );
};

export default FirstRow;