import bank from "../../../assets/images/auth/bank-card.png";
import nation from "../../../assets/images/auth/nation.png";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 220px;
  height: 140px;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 15px;
  @media (min-width: 1500px) {
    width: 283px;
  height: 200px;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
`;
const CardPhotos = () => {
  return (
    <Container>
      <div>
        <Title>تصویر کارت ملی</Title>
        <ImageWrapper>
          <img src={nation} alt="nation" />
        </ImageWrapper>
      </div>
      <div>
        <Title>تصویر کارت بانکی</Title>
        <ImageWrapper>
          <img src={bank} alt="bank" />
        </ImageWrapper>
      </div>
    </Container>
  );
};

export default CardPhotos;
