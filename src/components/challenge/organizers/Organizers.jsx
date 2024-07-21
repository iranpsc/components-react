import { useEffect, useRef, useState } from "react";

import Content from "./Content";
import Footer from "./Footer";
import styled from "styled-components";

const Container = styled.div`
  height: 325px;
  padding-bottom: 20px;
  overflow-y: auto;
  direction: ltr;
  padding-right: 15px;
  margin-top: 30px;
  @media (min-width: 720px) {
    height: 442px;
  }
  @media (min-width: 740px) {
    height: 265px;
  }
  @media (min-width: 840px) {
    height: 300px;
  }
  @media (min-width: 880px) {
    height: 248px;
  }
  @media (min-width: 890px) {
    height: 325px;
  }
  @media (min-width: 930px) {
    height: 340px;
  }
  @media (min-width: 1024px) {
    height: auto;
    padding-right: 0;
  }
  @media (min-width: 1366px) {
    height: auto;
    padding-right: 0;
  }
  @media (min-width: 1400px) {
    height: 670px;
    padding-right: 15px;
    overflow-y: auto;
  }
  @media (min-width: 1600px) {
    height: auto;
    padding-right: 0;
    overflow-y: auto;
  }
  @media (min-width: 1920px) {
    height: auto;
    padding-right: 0;
    overflow-y: auto;
  }
`;
const Time = styled.div`
  display: flex;
  direction: rtl;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #1a1a18;
  padding: 5px 20px;
  h3 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
  }
  span {
    color: #0066ff;
    font-weight: 700;
    font-size: 24px;
  }
`;

const Organizers = ({
  organizers,
  firstPage,
  setFirstPage,
  footers,
  shining,
}) => {
  const [timer, setTimer] = useState(0.25 * 60);
  const timerInterval = useRef(null);

  useEffect(() => {
    timerInterval.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(timerInterval.current);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval.current);
  }, [timer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, "۰");
    const formattedSeconds = String(seconds).padStart(2, "۰");

    return `${formattedMinutes}:${formattedSeconds}`;
  };
  if (timer === 0) {
    setFirstPage(false);
  }
  return (
    <Container>
      <Time>
        <h3>منتظر برقراری ارتباط باشید</h3>
        <span>
          {formatTime(timer)
            .toLocaleString()
            .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
        </span>
      </Time>
      <Content organizers={organizers} />
      <Footer footers={footers} shining={shining} firstPage={firstPage} />
    </Container>
  );
};

export default Organizers;
