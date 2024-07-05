import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Video from "./Video";
import { useState } from "react";

const Education = ({ setOpenEducation }) => {
  const [size, setSize] = useState(false);
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - e.target.getBoundingClientRect().left,
      y: e.clientY - e.target.getBoundingClientRect().top,
    });
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
      e.preventDefault();
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleTouchStart = (e) => {
    setDragging(true);
    const { clientX, clientY } = e.touches[0];
    const rect = e.target.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;
    setOffset({ x: offsetX, y: offsetY });
    e.preventDefault(); 
  };

  const handleTouchMove = (e) => {
    if (dragging) {
      const { clientX, clientY } = e.touches[0];
      setPosition({
        x: clientX - offset.x,
        y: clientY - offset.y,
      });
      e.preventDefault(); 
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  const style = {
    backgroundColor: "#1A1A18",
    borderRadius: "10px",
    padding: `${size ? "0" : "15px 20px 8px 20px"}`,
    zIndex: "999",
    position: "absolute",
    top: position.y,
    left: position.x,
    width: "550px",
    cursor: dragging ? "grabbing" : "grab",
  };

  return (
    <div
      style={style}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {!size && (
        <Header
          show={show}
          setSize={setSize}
          setOpenEducation={setOpenEducation}
        />
      )}
      <Video setSize={setSize} size={size} show={show} />
      {!size && (
        <>
          <Content show={show} setShow={setShow} />
          <Footer show={show} />
        </>
      )}
    </div>
  );
};

export default Education;
