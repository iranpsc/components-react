import SellerPriceInfo from "./SellerPriceInfo";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  @media (min-width: 600px) {
    height: 33vh;
    overflow-y: auto;
  }
  @media (min-width: 800px) {
    height: auto;
  }
`;

const Text = styled.p`
  color: #ffffff;
  line-height: 1.5rem;
`;

const SellerPrice = () => {
  return (
    <Wrapper>
      <Text>
        این VOD توسط فروشنده قیمت گذاری شده است شما می توایند این ملک را به دو
        قیمت فروشنده به صورت ریال و PSC خریداری کنید{" "}
      </Text>
      <SellerPriceInfo />
    </Wrapper>
  );
};

export default SellerPrice;
