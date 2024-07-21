import { useEffect, useState } from "react";

import ConfettiExplosion from "react-confetti-explosion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { convertToPersian } from "../../../lib/convertToPersian";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  direction: rtl;
  align-items: center;
  position: sticky;
  bottom: 0;
  justify-content: space-between;
  margin-top: 10px;
  gap: 10px;
  @media (min-width: 1920px) {
    margin-top: 60px;
  }
  div {
    flex-grow: 1;
    background-color: #1a1a18;
    border-radius: 4px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    span {
      font-size: 16px;
      font-weight: 600;
      color: #dedee9;
    }
  }
`;

const Footer = ({ footers, shining, firstPage }) => {
  const [bright, setBright] = useState("one");
  useEffect(() => {
    if (shining === "five") {
      setBright("two");
    } else if (shining === "six") {
      setBright("three");
    }
  }, [shining]);

  useEffect(() => {
    if (!firstPage) {
      setBright("one");
    }
  }, [firstPage]);

  return (
    <Container>
      {footers.map((item) => (
        <div key={item.id} data-tooltip-id={item.slug}>
          <span>{convertToPersian(item.count)}</span>
          <img src={item.icon} width={26} height={26} />
          <ReactTooltip
            style={{
              backgroundColor: "#1a1a18",
              borderRadius: "10px",
              width: "100px",
              paddingBottom: "9.5px",
              textAlign: "center",
              zIndex: "999",
            }}
            id={item.slug}
            place="top"
            content={item.slug}
          />
          {bright === "two" && (
            <ConfettiExplosion
              style={{
                position: "absolute",
                top: "20px",
                right: "30px",
                opacity:'0%'
              }}
              particleSize={5}
              width={400}
              height={"100vh"}
              colors={["#18C08F"]}
            />
          )}
          {bright === "three" && (
            <ConfettiExplosion
              style={{
                position: "absolute",
                top: "20px",
                right: "175px",
                opacity:"0%"
              }}
              particleSize={5}
              width={400}
              height={"100vh"}
              colors={["#C30000"]}
            />
          )}
        </div>
      ))}
    </Container>
  );
};

export default Footer;
