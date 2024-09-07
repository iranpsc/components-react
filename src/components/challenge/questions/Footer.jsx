import { Tooltip as ReactTooltip } from "react-tooltip";
import { convertToPersian } from "../../../lib/convertToPersian";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  direction: rtl;
  position: sticky;
  bottom: 15px;
  justify-content: space-between;
  gap: 10px;
  div {
    flex-grow: 1;
    background-color: #1a1a18;
    border-radius: 4px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 8px;
    span {
      font-size: 16px;
      font-weight: 600;
      color: #dedee9;
    }
    img {
      width: 26px;
    }
  }
`;

const Footer = ({ footers }) => {
  return (
    <Container>
      {footers.slice(2, 4).map((item) => (
        <div key={item.id} data-tooltip-id={item.slug}>
          <span>{convertToPersian(item.count)}</span>
          <img src={item.icon} width={26} height={26} />
          <ReactTooltip
            style={{
              backgroundColor: "#1a1a18",
              borderRadius: "10px",
              width: "100px",
              textAlign: "center",
              paddingBottom: "9px",
              zIndex: "999",
            }}
            id={item.slug}
            place="top"
            content={item.slug}
          />
        </div>
      ))}
    </Container>
  );
};

export default Footer;
