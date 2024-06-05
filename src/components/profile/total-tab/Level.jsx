import level from "../../../assets/images/profile/level.png";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  background-color: #1a1a18;
  padding: 20px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 4fr 1fr;
`;

const Percent = styled.div`
  border-left: 1px solid #454545;
  padding-left: 20px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;
  h2 {
    color: #ffffff;
    font-weight: 600;
    font-size: 16px;
  }
  h3 {
    color: #dedee9;
    font-weight: 500;
    font-size: 16px;
  }
`;
const ProgressContainer = styled.div`
  height: 8px;
  background-color: #3b3b3b;
  border-radius: 28px;
  direction: ltr;
`;
const ProgressBar = styled.div`
  background-color: #ffc700;
  border-radius: 8px;
  width: 70%;
  height: 100%;
`;
const LevelCount = styled.div`
  display: flex;
  padding-right: 10px;
  justify-content: center;
`;

const Level = () => {
  return (
    <Container>
      <Percent>
        <Title>
          <h2>سطح مشارکت کننده</h2>
          <h3>٪۷۰</h3>
        </Title>
        <ProgressContainer>
          <ProgressBar />
        </ProgressContainer>
      </Percent>
      <LevelCount>
        {[1, 2].map((item) => (
          <img width={65} height={65} src={level} key={item} alt="level" />
        ))}
      </LevelCount>
    </Container>
  );
};

export default Level;
