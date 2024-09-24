import Button from "../../../Button";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { convertToPersian } from "../../../../lib/convertToPersian";
import line from "../../../../assets/images/profile/Line.png";
import person from "../../../../assets/images/profile/slide.png";
import pscpng from "../../../../assets/images/profile/psc.gif";
import rialpng from "../../../../assets/images/profile/rial.gif";
import styled from "styled-components";
import { useState } from "react";

const Info = styled.div`
  @media (min-width: 1366px) {
    border-left: 1px solid #000000;
    padding-left: 15px;
  }
`;
const ProposalStatus = styled.div``;
const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1a352b;
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
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const Text = styled.div`
  margin-top: 16px;

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
`;
const Person = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    border-radius: 100%;
  }
  p {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  a {
    text-decoration: none;
    color: #0066ff;
  }
`;
const Time = styled.div`
  p {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 600;
  }
  h3 {
    color: #dedee9;
    font-size: 18px;
    font-weight: 500;
    margin-top: 4px;
  }
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

const Days = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #454545;
  button {
    white-space: nowrap;
    font-size: 16px;
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 16px;
`;

const Div = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #454545;
`;
const Remained = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 22px;
  border-radius: 10px;
  border: 1px solid #454545;
  color: #949494;
  font-size: 16px;
  font-weight: 400;
`;

const Proposer = ({ code, date, rial, psc, information, percent }) => {
  const [day, setDay] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Container>
      <Info>
        <Header>
          <Person>
            <img src={person} alt={code} width={60} height={60} />
            <div>
              <p>پیشنهاد دهنده</p>
              <a href="https://rgb.irpsc.com/fa/citizen/hm-2000001">{code}</a>
            </div>
          </Person>
          <Time>
            <div>
              <p>تاریخ ثبت پیشنهاد</p>
              <h3>{date}</h3>
            </div>
          </Time>
        </Header>
        <Price>
          <h3>قیمت پیشنهادی</h3>
          <Prices>
            <div>
              <img width={24} height={24} src={rialpng} />
              <span>{rial}</span>
            </div>
            <img width={1} height={24} src={line} />
            <div>
              <img width={24} height={24} src={pscpng} />
              <span>{psc}</span>
            </div>
            <img width={1} height={24} src={line} />
            <div>
              <MdOutlineKeyboardArrowUp style={{ color: "#18C08F" }} />
              <h3>{percent}</h3>
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
        {day === 0 && (
          <Days>
            <Button
              onclick={() => setDay(7)}
              label="۷ روز فرصت"
              color="#3B3B3B"
              textColor="#949494"
              full
            />
            <Button
              onclick={() => setDay(1)}
              label="۱ روز فرصت"
              color="#3B3B3B"
              textColor="#949494"
              full
            />
          </Days>
        )}
        {day !== 0 && (
          <Div>
            <Remained>{convertToPersian(day)} روز دیگر فرصت دارید</Remained>
          </Div>
        )}
        <Buttons>
          <Button label="رد پیشنهاد" color="#C30000" textColor="#FFFFFF" full />
          <Button
            label="قبول پیشنهاد"
            color="#18C08F"
            textColor="#FFFFFF"
            full
          />
        </Buttons>
      </ProposalStatus>
    </Container>
  );
};

export default Proposer;
