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

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#000000",
  borderRadius: "10px",
  flexDirection: "column",
  padding: "15px 20px",
  zIndex: "999",
  "@media (min-width: 768px)": {},
};

const LoadingModal = () => (
  <Rnd
    style={style}
    default={{
      x: -580,
      y: -175,
      width: 1388,
      height: 750,
    }}
    minWidth={560}
    maxWidth={1388}
    minHeight={350}
    maxHeight={750}
  >
    <Header loading title="ورود به ملک" />
    <Loader>
      <img src={loader} width={130} height={130} alt="loader" />
      <Text>متناسب با سرعت اینترنت شما این مجموعه بارگیری خواهد شد</Text>
    </Loader>
  </Rnd>
);

export default LoadingModal;
