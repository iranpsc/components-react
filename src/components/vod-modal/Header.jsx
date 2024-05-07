import { FaCircleExclamation, FaCircleQuestion } from "react-icons/fa6";

import { IoIosClose } from "react-icons/io";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 998px) {
    margin-bottom: 30px;
    margin-top: 10px;
  }
`;

const Text = styled.h2`
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  @media (min-width: 998px) {
    font-size: 20px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  svg {
    color: #3b3b3b;
    width: 30px;
    height: 30px;
    @media (min-width: 998px) {
      width: 40px;
      height: 40px;
    }
  }
`;

const CloseWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: rgb(59, 8, 8);
  cursor: pointer;
  @media (min-width: 998px) {
    width: 40px;
    height: 40px;
  }
  svg {
    color: red;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Text>اطلاعات ملک</Text>
      <Icons>
        <FaCircleQuestion />
        <FaCircleExclamation />
        <CloseWrapper>
          <IoIosClose />
        </CloseWrapper>
      </Icons>
    </HeaderWrapper>
  );
};

export default Header;
