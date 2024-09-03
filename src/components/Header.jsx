import { FaCircleExclamation, FaCircleQuestion } from "react-icons/fa6";

import { BiExitFullscreen } from "react-icons/bi";
import Education from "./education/Education";
import { IoIosClose } from "react-icons/io";
import { PiGearSixFill } from "react-icons/pi";
import { TiWarning } from "react-icons/ti";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const IconWrapper = styled.div`
  width: 11px;
  height: 11px;
  z-index: 0;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3b3b3b;
  padding: 10px;
  svg {
    transform: scale(1.7);
    color: #949494 !important;
  }
  @media (min-width: 1024px) {
    width: 20px;
    height: 20px;
    svg {
      transform: scale(1.1);
      width: 40px;
      height: 40px;
    }
  }
`;

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 0;
  justify-content: center;
  div {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #949494;
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
    z-index: 100;
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
    color: #949494;
  }
`;

const Header = ({ title, long, loading, profile, subdomain }) => {
  const [openEducation, setOpenEducation] = useState(false);
  const navigate = useNavigate();
  const reportsHandler = () => {
    navigate("/reports", { state: { title, subdomain } });
  };
  return (
    <HeaderWrapper>
      <Text long={long}>{title}</Text>
      <Icons>
        {loading && (
          <FullWrapper>
            <BiExitFullscreen scale={0.1} />
          </FullWrapper>
        )}
        {profile && (
          <>
            <IconWrapper  onClick={reportsHandler} style={{ cursor: "pointer" }}>
              <TiWarning />
            </IconWrapper>
            <IconWrapper>
              <PiGearSixFill />
            </IconWrapper>
          </>
        )}
        <Div onClick={() => setOpenEducation(true)}>
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
      {openEducation && <Education setOpenEducation={setOpenEducation} />}
    </HeaderWrapper>
  );
};

export default Header;
