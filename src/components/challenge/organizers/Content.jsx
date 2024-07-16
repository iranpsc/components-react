import Other from "./Other";
import Title from "../../Title";
import styled from "styled-components";

const MainPhoto = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  &:hover #hover {
    opacity: 100%;
  }
  img {
    width: 100%;
  }
`;
const Container = styled.div`
  margin-top: 30px;
`;

const Count = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 4px;
  padding: 4px 8px;
  z-index: 50;
  background-color: #ffffff;
  span {
    font-size: 14px;
    font-weight: 600;
    color: #949494;
  }
`;

const Hover = styled.div`
  transition: all 0.1s linear;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.713);
`;

const Contents = styled.div`
  padding: 10px 20px 20px 10px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  a {
    text-decoration: none;
    color: #008bf8;
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

const Others = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
`;

const Content = ({ organizers }) => {
  const main = organizers[0];

  return (
    <Container>
      <Title title="برگزار کنندگان آزاد" />
      <MainPhoto>
        <Count>
          <span>{main.count}</span>
          <img src={main.color} alt={main.count} width={20} height={20} />
        </Count>
        <Hover id="hover">
          <div />
          <Contents>
            <Top>
              <h2>شرکت تعاونی زنجیره تامین بهشت</h2>
              <h3>{main.company}</h3>
            </Top>
            <Bottom>
              <Right>
                <Titlee>شناسه تولید</Titlee>
                <a href="">{main.code}</a>
              </Right>
              <Center>
                <Titlee>حمایت مالی</Titlee>
                <div>
                  <span>{main.support}</span>
                  <img
                    src={main.color}
                    alt={main.color}
                    width={24}
                    height={24}
                  />
                </div>
              </Center>
              <Left>
                <Titlee>تاریخ اتمام تخفیف ها</Titlee>
                <span>{main.date}</span>
              </Left>
            </Bottom>
          </Contents>
        </Hover>
        <img src={main.image} alt={main.company} width={400} height={250} />
      </MainPhoto>
      <Others>
        {organizers.slice(1,7).map((other) => (
          <Other key={other.id} {...other} />
        ))}
      </Others>
    </Container>
  );
};

export default Content;
