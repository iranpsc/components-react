import { FaAngleLeft } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { TbMinimize } from "react-icons/tb";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #3b3b3b;
  svg {
    transform: scale(0.7);
    cursor: pointer;
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
  @media (max-width: 1400px) {
    display: ${props => props.show ? 'none' : 'flex'};
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
  cursor: pointer;
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

const Back = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3b3b3b;
  border-radius: 100%;
  margin-right: auto;
  cursor: pointer;
  svg {
    color: white;
  }
`;

const Header = ({ show, setOpenEducation, setSize }) => {
  return (
    <HeaderWrapper show={show}>
          <Text>آموزش</Text>
          <Icons>
            <Div onClick={() => setSize(true)}>
              <TbMinimize style={{ color: "#949494" }} />
            </Div>
            <CloseWrapper onClick={() => setOpenEducation(false)}>
              <IoIosClose />
            </CloseWrapper>
          </Icons>
    </HeaderWrapper>
  );
};

export default Header;
