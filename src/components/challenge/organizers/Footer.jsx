import { Tooltip as ReactTooltip } from "react-tooltip";
import { convertToPersian } from "../../../lib/convertToPersian";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  direction: rtl;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  gap: 10px;
  @media (min-width: 1920px) {
    margin-top: 40px;
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

const Footer = ({ footers }) => {
  return (
    <Container className="flex items-center gap-[10px] justify-between">
      {footers.map((item) => (
        <div key={item.id} data-tooltip-id={item.slug}>
          <span>
            {convertToPersian(item.count)}
          </span>
          <img src={item.icon} width={26} height={26} />
          <ReactTooltip
            style={{
              backgroundColor: "#1a1a18",
              borderRadius: "10px",
              width: "100px",
              textAlign: "center",
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
