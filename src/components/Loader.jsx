import loaderImage from "../assets/images/loading.svg";
import styled from "styled-components";

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
`;

const LoaderImage = styled.img`
  width: 150px;
  height: 150px;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderImage src={loaderImage} alt="Loading..." />
    </LoaderContainer>
  );
};

export default Loader;
