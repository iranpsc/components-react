import { FaCircleExclamation, FaCircleQuestion } from "react-icons/fa6";

import { IoIosClose } from "react-icons/io";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const Text = styled.h2`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  svg {
    color: #3b3b3b;
    width: 40px;
    height: 40px;
  }
`;

const CloseWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: rgb(59, 8, 8);
  cursor: pointer;
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
