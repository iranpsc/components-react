import Alert from "../../Alert";
import { AlertContext } from "../../../App";
import InfoRow from "../InfoRow";
import Title from "../../Title";
import styled from "styled-components";
import { useContext } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  direction: ltr;
  gap: 20px;
  margin-top: 20px;
  @media (max-width:850px) {
    height: 56% !important;
  }
  @media (max-width: 1023px) {
    max-height: 14.5rem;
    overflow-y: auto;
  }
`;
const CurrenciesContent = ({ option, currencies }) => {
  const currencyContent = currencies.find((currency) => currency.id === option);
  const { alert } = useContext(AlertContext);
  return (
    <div>
      {alert && <Alert type="success" text="خرید شما با موفقیت انجام شد!" />}
      <Title title="ارزها" />
      <Wrapper>
        {currencyContent.items.map((item) => (
          <InfoRow type="ارز" key={item.id} data={item} />
        ))}
      </Wrapper>
      ;
    </div>
  );
};

export default CurrenciesContent;
