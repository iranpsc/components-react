import { HiOutlineTrash } from "react-icons/hi";
import { IoWarningOutline } from "react-icons/io5";
import Slider from "./Slider";
import slide1 from "../../../assets/images/slide1.png";
import slide2 from "../../../assets/images/slide2.png";
import slide3 from "../../../assets/images/slide3.png";
import slide4 from "../../../assets/images/slide4.png";
import slide5 from "../../../assets/images/slide5.png";
import slide6 from "../../../assets/images/slide6.png";
import styled from "styled-components";
import { useState } from "react";

const images_array = [
  { id: 1, image: slide1 },
  { id: 2, image: slide2 },
  { id: 3, image: slide3 },
  { id: 4, image: slide4 },
  { id: 5, image: slide5 },
  { id: 6, image: slide6 },
  { id: 7, image: slide4 },
];

const AlbumWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
  padding: 0 20px;
`;

const UploadMore = styled.div`
  width: 100%;
  height: 150px;
  border: 2px dashed #454545;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 46px;
  border-radius: 10px;
  color: #dedee9;
  position: relative;
  input {
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    position: absolute;
  }

  @media (min-width: 400px) {
    width: 153px;
    height: 153px;
  }
  @media (min-width: 998px) {
    width: 187px;
    height: 187px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  @media (min-width: 400px) {
    width: 155px;
    height: 155px;
  }
  @media (min-width: 998px) {
    width: 189px;
    height: 189px;
    &:hover img {
      transform: scale(1.1);
    }
  }
  img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
  }
`;

const Actions = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
`;

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc700;
  &:nth-of-type(2) {
    margin-top: 3px;
  }
  svg {
    font-size: 13px;
    cursor: pointer;
  }
  @media (min-width: 998px) {
    width: 30px;
    height: 30px;
    &:nth-of-type(2) {
      margin-top: 8px;
    }
    svg {
      font-size: 20px !important;
    }
  }
`;

const Album = () => {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState(images_array);
  const deleteHandler = (id) => {
    const filteredImages = images.filter((item) => item.id !== id);
    setImages(filteredImages);
  };
  return (
    <>
      <AlbumWrapper>
        {images.map((item) => (
          <ImageWrapper key={item.id}>
            <img
              onClick={() => setOpen(true)}
              src={item.image}
              alt={item.image}
            />
            <Actions>
              <IconWrapper onClick={() => deleteHandler(item.id)}>
                <HiOutlineTrash />
              </IconWrapper>
              <IconWrapper>
                <IoWarningOutline />
              </IconWrapper>
            </Actions>
          </ImageWrapper>
        ))}
        <UploadMore>
          +
          <input type="file" />
        </UploadMore>
      </AlbumWrapper>
      {open && (
        <Slider
          deleteHandler={deleteHandler}
          images={images}
          setOpen={setOpen}
        />
      )}
    </>
  );
};

export default Album;
