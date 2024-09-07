import Header from "../../Header";
import { Rnd } from "react-rnd";
import loader from "../../../assets/images/loader.svg";
import styled from "styled-components";

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
`;

const Text = styled.p`
  color: #ffffff;
  line-height: 1.5rem;
  margin-top: 10px;
  max-width: 340px;
  text-align: center;
`;

const LoadingModal = ({ isMobile }) => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    borderRadius: "10px",
    flexDirection: "column",
    padding: "15px 20px",
    zIndex: "999",
  };
  if (isMobile) {
    return (
      <Rnd
        style={style}
        default={{
          x: 0,
          y: 0,
          width: 640,
          height: 350
        }}
        bounds={"window"}
        enableResizing={false}
      >
        <Header loading title="ورود به ملک" />
        <Loader>
          <img src={loader} width={130} height={130} alt="loader" />
          <Text>متناسب با سرعت اینترنت شما این مجموعه بارگیری خواهد شد</Text>
        </Loader>
      </Rnd>
    );
  }
  return (
    <Rnd
      style={style}
      default={{
        x: 0,
        y: 0,
        width: 1380,
        height:750
      }}
      bounds={"window"}
      enableResizing={false}
    >
      <Header loading title="ورود به ملک" />
      <Loader>
        <img src={loader} width={130} height={130} alt="loader" />
        <Text>متناسب با سرعت اینترنت شما این مجموعه بارگیری خواهد شد</Text>
      </Loader>
    </Rnd>
  );
};

export default LoadingModal;
