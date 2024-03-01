import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { LuPackageOpen } from "react-icons/lu";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";
import { RxLayout } from "react-icons/rx";
import styled from "styled-components";

const second_row_info = [
  {
    id: 1,
    title: "تراکم | طبقه",
    value: 12,
    icon: <HiOutlineBuildingOffice />,
  },
  { id: 2, title: "پکیج ساخت", value: 10, icon: <LuPackageOpen /> },
  {
    id: 3,
    title: "مجوز ساخت",
    value: "آزاد",
    icon: <MdOutlinePlaylistAddCheckCircle />,
  },
  { id: 4, title: "متراژ  |  متر مربع", value: 1937, icon: <RxLayout /> },
  { id: 5, title: "سود ساعت شمار", value: 232.44, icon: <RiCloseCircleLine /> },
];

const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  margin-top: 15px;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
  white-space: nowrap;
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

const SecondRow = () => {
  return (
    <RowWrapper>
      {second_row_info.map((item) => (
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

export default SecondRow;