import { Tooltip as ReactTooltip } from "react-tooltip";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 130px;
  overflow: hidden;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Count = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  background-color: #ffffff;
  border-radius: 4px;
  img {
    width: 20px;
    height: 20px;
  }
  span {
    font-size: 14px;
    font-weight: 600;
    color: #949494;
  }
`;
const Other = ({ slug, image, color, count }) => {
  return (
    <Container>
      <Count data-tooltip-id={slug}>
        <span>{count}</span>
        <img src={color} alt={count} width={20} height={20} />
        {/* <ReactTooltip
          style={{
            backgroundColor: "#000000",
            borderRadius: "10px",
            width: "80px",
            textAlign: "center",
          }}
          id={slug}
          place="bottom"
          content={slug}
        /> */}
      </Count>
      <img src={image} alt={color} width={130} height={130} />
    </Container>
  );
};

export default Other;
