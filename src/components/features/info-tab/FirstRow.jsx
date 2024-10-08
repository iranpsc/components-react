import { BsCardChecklist } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineHome } from "react-icons/md";
import TextValueIcon from "../../TextValueIcon";
import styled from "styled-components";

const first_row_info = [
  { id: 1, title: "شناسه ملک", value: "QA31-10789", icon: <MdOutlineHome /> },
  { id: 2, title: "صاحب ملک", value: "QA31-10789", icon: <HiOutlineUser /> },
  { id: 3, title: "وضعیت", value: "QA31-10789", icon: <BsCardChecklist /> },
];

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: 1fr 1fr; */
  gap: 20px;
  @media (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr !important;
  }

  @media (max-width: 1024px) and (min-height: 600px) {
    grid-template-columns: 1fr 1fr 1fr !important;
  }
  
  @media (min-width: 1180px) and (max-height: 820px) {
    grid-template-columns: 1fr 1fr 1fr !important;
  }
`;

const FirstRow = () => {
  return (
    <RowWrapper>
      {first_row_info.map((item) => (
        <TextValueIcon key={item.id} {...item} />
      ))}
    </RowWrapper>
  );
};

export default FirstRow;
