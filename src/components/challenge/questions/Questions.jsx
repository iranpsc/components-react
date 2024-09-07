import { useEffect, useRef, useState } from "react";

import Content from "./Content";
import Footer from "./Footer";
import gif from "../../../assets/images/profile/blue-color.gif";
import image from "../../../assets/images/challenge/challenge1.png";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 65px;
  @media (min-width: 1400px) {
    gap: 115px;
  }
`;
const Timer = styled.div`
  display: grid;
  direction: rtl;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  background-color: #1a1a18;
  padding: 5px 15px;
  margin-bottom: 30px;
  border-radius: 5px;
`;
const Time = styled.div`
  span {
    color: #0066ff;
    font-size: 20px;
    font-weight: 700;
  }
`;
const Title = styled.h3`
  font-size: 13px;
  font-weight: 400;
  color: #dedee9;
`;
const Gif = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  span {
    color: #949494;
    font-size: 16px;
    font-weight: 600;
  }
  img {
    width: 24px;
  }
`;

const question = {
  title: "قیمت هر واحد رنگ آبی چند تومان است؟",
  options: [
    {
      id: 1,
      title:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان ",
      status: true,
      percent: 80,
    },
    { id: 2, title: "1900", status: false, percent: 10 },
    { id: 3, title: "1900", status: false, percent: 29 },
    { id: 4, title: "1900", status: false, percent: 29 },
  ],
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 370px;
  gap: 20px;
  margin-top: 20px;
  height: calc(100% - 140px);
  overflow-y: auto;
  direction: ltr;
  padding-bottom: 22px;
  padding-right: 15px;
  img {
    border-radius: 10px;
    width: 100%;
  }
  @media (min-width: 1180px) {
    padding-right: 0;
  }
  @media (min-width: 1400px) {
    height: calc(100% - 175px);
    padding-right: 15px;
    grid-template-columns: 1fr;
  }
  @media (min-width: 1920px) {
    padding-right: 15px;
  }
`;
const Div = styled.div`
height: fit-content;
position: sticky;
top: 0px;
@media (min-width: 1400px) {
  position: static;
}
`;

const Questions = ({ setFirstPage, footers, setFooters, setShining }) => {
  const [timer, setTimer] = useState(0.25 * 60);
  const [showAnswer, setShowAnswer] = useState(false);
  const timerInterval = useRef(null);

  const handleTimer = () => {
    setTimer((prevTimer) => {
      if (prevTimer > 0) {
        return prevTimer - 1;
      } else {
        clearInterval(timerInterval.current);
        return 0;
      }
    });
  };

  useEffect(() => {
    timerInterval.current = setInterval(handleTimer, 1000);

    return () => clearInterval(timerInterval.current);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setShowAnswer(true);
      setTimer(0.25 * 60);
      setTimeout(() => {
        setFirstPage(true);
      }, 15000);
    }
  }, [timer, setFirstPage]);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, "۰");
    const formattedSeconds = String(seconds).padStart(2, "۰");

    return `${formattedMinutes}:${formattedSeconds}`;
  };
  return (
    <Container>
      <Wrapper>
        <Div>
          <img src={image} alt="challenge" width={410} height={200} />
          <Timer>
            <Time>
              <Title>زمان باقی مانده</Title>
              <span>
                {formatTime(timer)
                  .toLocaleString()
                  .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
              </span>
            </Time>
            <Gif>
              <Title>پاداش شما</Title>
              <div>
                <span>۱۲</span>
                <img
                  loading="lazy"
                  src={gif}
                  alt="gif"
                  width={26}
                  height={26}
                />
              </div>
            </Gif>
          </Timer>
        </Div>
        <Content
          showAnswer={showAnswer}
          setShowAnswer={setShowAnswer}
          question={question}
          setTimer={setTimer}
          setFirstPage={setFirstPage}
          setFooters={setFooters}
          setShining={setShining}
        />
      </Wrapper>
      <Footer footers={footers} />
    </Container>
  );
};

export default Questions;
