import { Tooltip as ReactTooltip } from "react-tooltip";
import { convertToPersian } from "../../../lib/convertToPersian";
import styled from "styled-components";
import users from "../../../assets/images/challenge/profile-2user.png";
import view from "../../../assets/images/challenge/eye.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  direction: rtl;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
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
    <Container className="flex items-center gap-[10px] justify-between">
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
