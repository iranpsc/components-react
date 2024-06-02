import psc from "../../../assets/images/shop/psc.png";
import rial from "../../../assets/images/shop/rial.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: #dedee9;
    font-size: 14px;
  }
  @media (min-width: 998px) {
    font-size: 16px;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  h3 {
    color: #a0a0ab;
    font-size: 12px;
    font-weight: 500;
  }
  @media (min-width: 998px) {
    h3 {
      font-size: 14px;
    }
  }
`;
const Pricing = ({ type }) => {
  return (
    <Container>
      <Title>
        <h3>قیمت گذاری</h3>
        <img
          src={type === "rial" ? rial : psc}
          alt="pricing"
          width={18}
          height={18}
        />
      </Title>
      <span>0</span>
    </Container>
  );
};

export default Pricing;
