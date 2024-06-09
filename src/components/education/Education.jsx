import Header from "./Header";
import { Rnd } from "react-rnd";
import Video from "./Video";

const Education = () => {
  const style = {
    backgroundColor: "#1A1A18",
    borderRadius: "10px",
    padding: "15px 20px",
    zIndex: "999",
    "@media (min-width: 768px)": {},
  };
  return (
    <Rnd
      style={style}
      default={{
        x: -580,
        y: -175,
        width: 550,
        height: 510,
      }}
    >
      <Header />
      <Video />
    </Rnd>
  );
};

export default Education;
