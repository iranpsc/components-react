import { HiOutlineUser } from "react-icons/hi";
import Pricing from "./Pricing";
import TitleValue from "../../shop-modal/TitleValue";
import styled from "styled-components";

const Container = styled.div`
  background-color: #1a1a18;
  border-radius: 5px;
  padding: 10px;
  display: grid;
  direction: rtl;
  align-items: center;
  grid-template-columns: 3fr 2fr 2fr 2fr;
`;
const UserTime = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Time = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  color: #ffffff;
  span {
    &:first-of-type {
      font-size: 20px;
      font-weight: 600;
    }
    &:last-of-type {
      font-weight: 400;
      font-size: 9px;
    }
  }
  @media (min-width: 998px) {
    width: 80px !important;
    height: 80px !important;
    span {
      &:first-of-type {
        font-weight: 600;
      }
      &:last-of-type {
        font-size: 13px;
      }
    }
  }
`;
const User = styled.div`
  h4 {
    color: ${(props) => (props.owner ? "#FFFFFF" : "#0066ff")};
    font-size: 12px;
  }
  @media (min-width: 998px) {
    h4 {
      font-size: 16px;
    }
  }
`;
const Div = styled.div`
  display: flex;
  margin-bottom: 4px;
  align-items: center;
  gap: 4px;
  color: #a0a0ab;
  span {
    font-size: 10px;
  }
  @media (min-width: 998px) {
    span {
      font-size: 14px;
    }
  }
`;
const HistoryItem = ({ date, user, time, owner }) => {
  return (
    <Container>
      <UserTime>
        <Time>
          <span>{String(date.day).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}</span>
          <span>{date.month}</span>
        </Time>
        <User owner={owner}>
          <Div>
            {owner ? (
              <span>مالک اولیه</span>
            ) : (
              <>
                <HiOutlineUser size={20} />
                <span>خریداری شده توسط</span>
              </>
            )}
          </Div>
          <h4>{user}</h4>
        </User>
      </UserTime>
      <TitleValue small title="تاریخ و زمان" value={time} />
      <Pricing type="rial" />
      {!owner && <Pricing type="psc" />}
    </Container>
  );
};

export default HistoryItem;
