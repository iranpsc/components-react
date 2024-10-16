import styled from "styled-components";
import { toast } from "react-toastify";
import { useState } from "react";

const On = styled.div`
  width: 45px;
  height: 25px;
  margin-top: 5px;
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 20px;
  padding: 0 1px;
  cursor: pointer;
  transition: all 0.2s linear;
  background-color: ${(props) => (props.off ? "#FFC700" : "#cccccc")};
  div {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    position: absolute;
    transition: all 0.2s linear;
    left: ${(props) => (props.off ? "22.5px" : "1px")};
    background-color: ${(props) => (props.off ? "black" : "white")};
  }
`;

const OnOff = ({ label }) => {
  const [off, setOff] = useState(false);
  return (
    <On
      off={off}
      onClick={() => {
        setOff(!off);
        toast.success(`${label} با موفقیت ${off ? "خاموش" : "روشن"} شد!`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          bodyClassName: "success",
        });
      }}
    >
      <div></div>
    </On>
  );
};

export default OnOff;
