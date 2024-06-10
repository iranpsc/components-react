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
  label {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    display: none;
  }
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
  bottom: 55px;
  height: 100%;
  width: fit-content;
  @media (min-width: 740px) {
  bottom: 10px;
  }
`;

const slides = [
  { id: 1, image: slidePic },
  { id: 2, image: slidePic },
  { id: 3, image: slidePic },
  { id: 4, image: slidePic },
  { id: 5, image: slidePic },
  { id: 6, image: slidePic },
];

const Slider = () => {
  const [images, setImages] = useState(slides);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
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
            mouseOver = true;
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

  const removeHandler = (id) => {
    const slidesAfterRemove = images.filter((image) => image.id !== id);
    setImages(slidesAfterRemove);
  };

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    const newImage = {
      id: images.length + 1,
      image: URL.createObjectURL(file),
    };
    const updatedImages = [...images];
    updatedImages.push(newImage);
    setImages(updatedImages);
  };
  return (
    <>
      <div ref={sliderRef} className="keen-slider profile">
        {images.map((slide, i) => (
          <div key={i} className="keen-slider__slide profile number-slide1">
            <div>
              <img src={slide.image} alt="slide" />
              <Icons>
                <IconWrapper onClick={() => removeHandler(slide.id)}>
                  <LuImageMinus />
                </IconWrapper>
                <IconWrapper>
                  <label htmlFor="add">
                    <LuImagePlus />
                  </label>
                  <input
                    onChange={handleImageChange}
                    id="add"
                    type="file"
                    accept="image/*"
                  />
                </IconWrapper>
                <IconWrapper>
                  <TiWarningOutline />
                </IconWrapper>
              </Icons>
            </div>
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
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
      )}
    </>
  );
};

export default Slider;
