import satisfy from "../../../assets/images/player/satisfy.png";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
  border-radius: 10px;
  background-color: #1a1a18;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const First = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #ffc700;
  }
  span {
    font-size: 20px;
    font-weight: 500;
    color: #dedee9;
  }
`;
const Second = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-weight: 500;
  font-size: 15px;
  color: #dedee9;
  span {
    &:nth-of-type(2) {
      margin: 0 10px;
      color: #454545;
    }
  }
`;
const SatisfyCount = () => {
  return (
    <Container>
      <img width={100} height={100} src={satisfy} alt="رضایت" />
      <First>
        <h3>۵.۰۴۸</h3>
        <span>رضایت</span>
      </First>
      <Second>
        <span>۳۴ روز</span>
        <span>|</span>
        <span>۱۸ ساعت ۲۹ دقیقه ۴۵ ثانیه</span>
      </Second>
    </Container>
  );
};

export default SatisfyCount;
