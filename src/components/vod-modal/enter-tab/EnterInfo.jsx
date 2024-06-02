import { useEffect, useState } from "react";

import Info from "./Info";
import Slider from "./Slider";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 0;
  overflow-y: auto;
  direction: ltr;
  height: 65%;
  gap: 30px;
  display: grid;
  @media (min-width: 1024px) and (max-width: 1369px) {
    height: 71%;
  }
  @media (min-width: 1370px) {
    height: 77%;
  }
  @media (min-width: 1500px) {
    height: 77%;
    grid-template-columns: 2fr 3fr;
  }
`;

const EnterInfo = ({ setEdit, data, edit, payed, setPayed, isOwner }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1369);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1369);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      {isMobile ? (
        <>
          <Info
            isOwner={isOwner}
            data={data}
            edit={edit}
            setEdit={setEdit}
            payed={payed}
            setPayed={setPayed}
          />
          <Slider data={data} />
        </>
      ) : (
        <>
          <Slider data={data} />
          <Info
            isOwner={isOwner}
            data={data}
            edit={edit}
            setEdit={setEdit}
            payed={payed}
            setPayed={setPayed}
          />
        </>
      )}
    </Container>
  );
};

export default EnterInfo;
