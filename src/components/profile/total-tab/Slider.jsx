import "keen-slider/keen-slider.min.css";
import "../../../styles/styles.css";

import { LuImageMinus, LuImagePlus } from "react-icons/lu";

import { TiWarningOutline } from "react-icons/ti";
import slidePic from "../../../assets/images/profile/slide.png";
import styled from "styled-components";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

const IconWrapper = styled.div`
  width: 34px;
  height: 34px;
  cursor: pointer;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a18;
  svg {
    font-size: 20px;
  }
`;
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  height: 100%;
  width: fit-content;
`;
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 6000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = false;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <>
      <div ref={sliderRef} className="keen-slider profile">
        {[1, 2, 3, 4, 5, 6].map((slide) => (
          <div key={slide} className="keen-slider__slide profile number-slide1">
            <div>
              <img src={slidePic} alt="slide" />
              <Icons>
                <IconWrapper>
                  <LuImageMinus />
                </IconWrapper>
                <IconWrapper>
                  <LuImagePlus />
                </IconWrapper>
                <IconWrapper>
                  <TiWarningOutline />
                </IconWrapper>
              </Icons>
            </div>
          </div>
        ))}
      </div>
      {/* {instanceRef.current && ( */}
      <div className="dots">
        {[...Array(6)].map((idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={"dot" + (currentSlide === idx ? " active" : "")}
            ></button>
          );
        })}
      </div>
      {/* )} */}
    </>
  );
};

export default Slider;
