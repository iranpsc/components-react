import { useEffect, useState } from "react";

import Button from "../../../Button";
import ConfettiExplosion from "react-confetti-explosion";
import { convertToPersian } from "../../../../lib/convertToPersian";
import line from "../../../../assets/images/profile/Line.png";
import pscpng from "../../../../assets/images/profile/psc.gif";
import rialpng from "../../../../assets/images/profile/rial.gif";
import styled from "styled-components";

const Info = styled.div`
  @media (min-width: 1366px) {
    border-left: 1px solid #000000;
    padding-left: 15px;
  }
`;

const ProposalStatus = styled.div`
  p {
    color: #ffffff;
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 10px;
    text-align: right;
  }
`;

const TimeSection = styled.div`
  display: flex;
  direction: ltr;
  gap: 10px;
  justify-content: space-between;
  padding: 10px;
  border-radius: 6px;
`;

const TimeBox = styled.div`
  background-color: #2c2c2c;
  padding: 10px 20px;
  border-radius: 6px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #dedee9;
  font-size: 16px;
  font-weight: 500;
  text-align: center;

  span {
    font-size: 13px;
    font-weight: 600;
    margin-top: 4px;
    color: #a0a0ab;
  }
`;

const Buttons = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 16px;
`;

const Container = styled.div`
  background-color: #1a1a18;
  border: 1px solid #454545;
  padding: 20px;
  border-radius: 10px;
  display: grid;
  gap: 15px;
  @media (min-width: 1366px) {
    grid-template-columns: 1fr 243px;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2c2c2c;
  border-radius: 6px;
  padding: 12px;

  h3 {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Prices = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    color: #dedee9;
    font-size: 18px;
    font-weight: 500;
  }

  h3 {
    color: #18c08f;
    font-size: 18px;
    font-weight: 600;
  }

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

const Text = styled.div`
  margin-top: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid #454545;
  p {
    color: #dedee9;
    font-size: 16px;
    font-weight: 400;
  }

  span {
    color: #ffc700;
    font-size: 16px;
    display: inline;
    font-weight: 400;
    cursor: pointer;
  }
  @media (min-width: 1366px) {
    border: none;
    padding-bottom: 0;
  }
`;

const RejectButton = styled.button`
  background-color: #c30000;
  color: #d7fbf0;
  border-radius: 10px;
  font-weight: 600;
  border: none;
  font-size: 16px;
  position: relative;
  padding: 10px 22px;
  cursor: pointer;
  font-family: inherit;
`;

const Proposer = ({
  code,
  date,
  rial,
  psc,
  onReject,
  information,
  initialHours,
  initialMinutes,
  initialSeconds,
}) => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((prevHours) => prevHours - 1);
          setMinutes(59);
          setSeconds(59);
        } else {
          clearInterval(countdown);
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [seconds, minutes, hours]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <Info>
        <Price>
          <h3>قیمت پیشنهادی</h3>
          <Prices>
            <div>
              <img width={24} height={24} src={rialpng} alt="Rial" />
              <span>{rial}</span>
            </div>
            <img width={1} height={24} src={line} alt="Line" />
            <div>
              <img width={24} height={24} src={pscpng} alt="PSC" />
              <span>{psc}</span>
            </div>
          </Prices>
        </Price>
        <Text>
          <p>
            {isExpanded ? information : `${information.slice(0, 227)}...`}{" "}
            <span onClick={handleToggle}>
              {isExpanded ? "بستن" : "مشاهده کل توضیحات"}
            </span>
          </p>
        </Text>
      </Info>
      <ProposalStatus>
        <p>فرصت درخواست شده</p>
        <TimeSection>
          <TimeBox>
            {convertToPersian(hours.toString().padStart(2, "0"))}
            <span>ساعت</span>
          </TimeBox>
          <TimeBox>
            {convertToPersian(minutes.toString().padStart(2, "0"))}
            <span>دقیقه</span>
          </TimeBox>
          <TimeBox>
            {convertToPersian(seconds.toString().padStart(2, "0"))}
            <span>ثانیه</span>
          </TimeBox>
        </TimeSection>
        <Buttons>
          <RejectButton
            onClick={() => {
              onReject();
              setIsExploding(!isExploding);
            }}
          >
            رد پیشنهاد
            {isExploding && (
              <ConfettiExplosion
                style={{
                  zIndex: 1000,
                  position: "absolute",
                  top: "10px",
                  left: "120px",
                }}
                particleSize={5}
                width={400}
                height={"100vh"}
                duration={3000}
                colors={["#C30000"]}
              />
            )}
          </RejectButton>{" "}
        </Buttons>
      </ProposalStatus>
    </Container>
  );
};

export default Proposer;
