import { FaCircleExclamation, FaCircleQuestion } from "react-icons/fa6";

import { BiExitFullscreen } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: white;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 998px) {
    margin-bottom: 30px;
    margin-top: 10px;
  }
`;

const Text = styled.h2`
  color: #ffffff;
  font-weight: 600;
  font-size: ${(props) => (props.long ? "14px" : "16px")};
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
    z-index: 999;
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
const FullWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #3b3b3b;
  cursor: pointer;
  @media (min-width: 998px) {
    width: 40px;
    height: 40px;
  }
  svg {
    color: black;
  }
`;

const Header = ({ title, long, loading }) => {
  return (
    <HeaderWrapper>
      <Text long={long}>{title}</Text>
      <Icons>
        {loading && (
          <FullWrapper>
            <BiExitFullscreen />
          </FullWrapper>
        )}
        <Div>
          <div />
          <FaCircleQuestion />
        </Div>
        <Div>
          <div />
          <FaCircleExclamation />
        </Div>
        <CloseWrapper>
          <IoIosClose />
        </CloseWrapper>
      </Icons>
    </HeaderWrapper>
  );
};

export default Header;
