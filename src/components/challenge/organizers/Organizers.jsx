import Content from "./Content";
import styled from "styled-components";

const Container = styled.div``;
const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #1a1a18;
  padding: 20px;
  h3 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
  }
  span {
    color: #0066ff;
    font-weight: 700;
    font-size: 24px;
  }
`;

const Organizers = ({organizers}) => {
  return (
    <Container>
      <Time>
        <h3>منتظر برقرار ارتباط باشید</h3>
        <span>۰۰:۱۲</span>
      </Time>
      <Content organizers={organizers}/>
    </Container>
  );
};

export default Organizers;
