import { Tooltip as ReactTooltip } from "react-tooltip";
import { convertToPersian } from "../../../lib/convertToPersian";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 130px;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
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

const Contents = styled.div`
  padding: 10px;
  direction: rtl;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Top = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 500;
    color: #fcfcfc;
  }
  h3 {
    font-size: 13px;
    font-weight: 400;
    color: #fcfcfc;
  }
`;

const Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  a {
    text-decoration: none;
    color: #ffc700;
  }
`;
const Center = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 6px;
    span {
      font-size: 13px;
      font-weight: 400;
      color: #fcfcfc;
    }
    img {
      width: 24px;
    }
  }
`;
const Left = styled.div`
  span {
    font-size: 13px;
    font-weight: 400;
    color: #fcfcfc;
  }
`;
const Titlee = styled.h2`
  font-size: 13px;
  font-weight: 500;
  color: #fcfcfc;
`;

const Other = ({ slug, image, support, date, color, code, count, company }) => {
  const hoverContent = (
    <Contents>
      <Top>
        <h2>شرکت تعاونی زنجیره تامین بهشت</h2>
        <h3>{company}</h3>
      </Top>
      <Bottom>
        <Right>
          <Titlee>شناسه تولید</Titlee>
          <a href="">{code}</a>
        </Right>
        <Center>
          <Titlee>حمایت مالی</Titlee>
          <div>
            <span>
              {convertToPersian(support)}
            </span>
            <img src={color} alt={color} width={24} height={24} />
          </div>
        </Center>
        <Left>
          <Titlee>تاریخ اتمام تخفیف ها</Titlee>
          <span>{date}</span>
        </Left>
      </Bottom>
    </Contents>
  );
  return (
    <Container>
      <Count dir="rtl" data-tooltip-id={slug}>
        <span>
          {convertToPersian(count)}
        </span>
        <img src={color} alt={count} width={20} height={20} />
        <ReactTooltip
          style={{
            backgroundColor: "#000000",
            borderRadius: "10px",
            width: "100px",
            textAlign: "center",
            zIndex: "999",
          }}
          id={slug}
          place="bottom"
          content={slug}
        />
      </Count>
      <img
        data-tooltip-id={image}
        src={image}
        alt={color}
        width={130}
        height={130}
      />
      <ReactTooltip
        style={{
          backgroundColor: "#1A1A18",
          borderRadius: "10px",
          width: "269px",
          textAlign: "right",
          zIndex: "999",
        }}
        id={image}
        place="left"
        content={hoverContent}
      />
    </Container>
  );
};

export default Other;
