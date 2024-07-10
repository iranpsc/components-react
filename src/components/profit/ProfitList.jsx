import styled from "styled-components";

const Container = styled.div`
  direction: rtl;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Card = styled.div`
  border-radius: 5px;
  background-color: #1a1a18;
  padding: 20px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #454545;
  padding-bottom: 10px;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    h3 {
      font-size: 13px;
      color: #dedee9;
      font-weight: 400;
    }
    h2 {
      font-size: 16px;
      color: #ffc700;
      font-weight: 600;
    }
  }
`;
const Image = styled.div`
  border-radius: 5px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
`;
const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 122px;
  height: 50px;
  border-radius: 10px;
  border-bottom: 2px solid ${(props) => props.color};
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  transform: rotateX(15deg);
  box-shadow: 0px 15px 30px -20px ${(props) => props.color};
  span {
    font-size: 16px;
  }
`;
const Footer = styled.span`
  font-size: 13px;
  color: #a0a0ab;
  font-weight: 500;
  display: flex;
  gap: 5px;
  padding-top: 7px;
  h4 {
    color: #dedee9;
    font-size: 13px;
    font-weight: 400;
  }
`;

const ProfitList = ({ cards }) => {
  return (
    <Container>
      {cards.map((card) => (
        <Card key={card.id}>
          <Content>
            <Info>
              <Image color={card.background}>
                <img src={card.logo} alt={card.title} />
              </Image>
              <div>
                <h3>{card.title}</h3>
                <h2>{card.code}</h2>
              </div>
            </Info>
            <Value color={card.color} background={card.background}>
              <span>{card.value}</span>
            </Value>
          </Content>
          <Footer>
            آخرین زمان جمع آوری: <h4>{card.date}</h4>{" "}
          </Footer>
        </Card>
      ))}
    </Container>
  );
};

export default ProfitList;
