import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { Rnd } from "react-rnd";
import Video from "./Video";
import { useState } from "react";

const Education = ({ setOpenEducation }) => {
  const [size, setSize] = useState(false);
  const [show, setShow] = useState(false);

  const style = {
    backgroundColor: "#1A1A18",
    borderRadius: "10px",
    padding: "15px 20px 8px 20px",
    zIndex: "999",
  };
  return (
    <Rnd
      style={style}
      default={{
        x: 90,
        y: 20,
        width: 550,
      }}
      enableResizing={false}
      bounds={"window"}
    >
      <Header
        size={size}
        setSize={setSize}
        setOpenEducation={setOpenEducation}
      />
      <Video />
      {!size && (
        <>
          <Content show={show} setShow={setShow} />
          <Footer />
        </>
      )}
    </Rnd>
  );
};

export default Education;
