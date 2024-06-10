import { HiOutlineUser } from "react-icons/hi";
import styled from "styled-components";

const User = styled.div`
  h4 {
    color: #0066ff;
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
    font-size: 12px;
  }
  @media (min-width: 998px) {
    span {
      font-size: 14px;
    }
  }
`;
const UserCode = ({ title, code }) => {
  return (
    <User>
      <Div>
        <HiOutlineUser size={20} />
        <span>{title}</span>
      </Div>
      <h4>{code}</h4>
    </User>
  );
};

export default UserCode;
