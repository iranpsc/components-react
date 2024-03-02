import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { LuPackageOpen } from "react-icons/lu";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";
import { RxLayout } from "react-icons/rx";
import TextValueIcon from "../../TextValueIcon";
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
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 15px;
  @media (min-width: 1300px) {
    grid-template-columns: 2fr 2fr 2fr 3fr 3fr;
  }
`;

const SecondRow = () => {
  return (
    <RowWrapper>
      {second_row_info.map((item) => (
        <TextValueIcon key={item.id} {...item} />
      ))}
    </RowWrapper>
  );
};

export default SecondRow;
