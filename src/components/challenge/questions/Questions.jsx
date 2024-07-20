import { useEffect, useRef, useState } from "react";

import Content from "./Content";
import Footer from "./Footer";
import gif from "../../../assets/images/profile/blue-color.gif";
import image from "../../../assets/images/challenge/challenge1.png";
import styled from "styled-components";

const Container = styled.div`
  height: 290px;
  overflow-y: auto;
  direction: ltr;
  margin-top: 20px;
  padding-bottom: 20px;
  padding-right: 15px;
  img {
    border-radius: 10px;
    width: 100%;
  }
  @media (min-width: 720px) {
    height: 454px;
  }
  @media (min-width: 740px) {
    height: 275px;
  }
  @media (min-width: 840px) {
    height: 305px;
  }
  @media (min-width: 880px) {
    height: 258px;
  }
  @media (min-width: 890px) {
    height: 330px;
  }
  @media (min-width: 930px) {
    height: 350px;
  }
  @media (min-width: 1024px) {
    height: 490px;
  }
  @media (min-width: 1180px) {
    height: auto;
    padding-right: 0;
  }
  @media (min-width: 1400px) {
    height: 660px;
    padding-right: 15px;
  }
  @media (min-width: 1920px) {
    height: 800px;
    padding-right: 15px;
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
  @media (min-width: 1400px) {
    grid-template-columns: 1fr;
  }
`;
const Div = styled.div``;

const Questions = ({ setFirstPage, footers, setFooters }) => {
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
          footers={footers}
        />
      </Wrapper>
      <Footer footers={footers} />
    </Container>
  );
};

export default Questions;
