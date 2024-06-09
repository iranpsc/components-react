import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { Rnd } from "react-rnd";
import Video from "./Video";

const Education = ({ setOpenEducation }) => {
  const style = {
    backgroundColor: "#1A1A18",
    borderRadius: "10px",
    padding: "15px 20px",
    zIndex: "999",
  };
  return (
    <Rnd
      style={style}
      default={{
        x: 90,
        y: 20,
        width: 550,
        height: 525,
      }}
    >
      <Header setOpenEducation={setOpenEducation} />
      <Video />
      <Content />
      <Footer />
    </Rnd>
  );
};

export default Education;
