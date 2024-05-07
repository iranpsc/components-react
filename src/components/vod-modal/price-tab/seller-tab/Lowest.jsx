import Button from "../../../Button";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 600px) {
    overflow-y: auto;
  }
  @media (max-width: 1024px) {
    height: 100%;
  }
`;

const Text = styled.p`
  color: #ffffff;
  line-height: 1.5rem;
`;

const InputWrapper = styled.div`
  height: 50px !important;
  position: relative;
  border-radius: 5px;
  border: 1px solid #454545;
  background-color: #2c2c2c;
  overflow: hidden;
  width: 276px;
`;

const Div = styled.div`
  height: 50px !important;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  border: none;
  height: 50px !important;
  color: gray;
  outline: none;
  padding-right: 10px;
  background-color: #2c2c2c;
`;

const Span = styled.span`
  position: absolute;
  color: gray;
  left: 10px;
  top: 24%;
`;

const Lowest = () => {
  const [percentage, setPercentage] = useState("");
  return (
    <Wrapper>
      <Text>
        در این قسمت شما میتوانید قیمت پیشنهادی ملک خود را نسبت به قیمت اولیه
        متارنگ به صورت درصدی تعیین نمایید. در این صورت پیشنهاد های کمتر از این
        محدوده برای شما ارسال نخواهد شد
      </Text>
      <Div>
        <InputWrapper>
          <Input
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            type="number"
            min={0}
            max={100}
            placeholder="50"
          />
          <Span>%</Span>
        </InputWrapper>
      </Div>
      <Button label="ثبت قیمت" onclick={() => {}} />
    </Wrapper>
  );
};

export default Lowest;
