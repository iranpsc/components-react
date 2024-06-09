import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  padding-bottom: 5px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      color: #008bf8;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
      @media (min-width: 1400px) {
        display: none;
      }
    }
  }
  h2 {
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 7px;
    margin-bottom: 10px;
  }
  p {
    color: #969696;
    font-size: 16px;
    font-weight: 500;
    height: 110px;
    padding-left: 5px;
    overflow-y: auto;
    line-height: 26px;
    /* @media (max-width: 1400px) {
      display: ${(props) => (props.show ? "block" : "none")};
    } */
  }
`;

const Content = () => {
  const [show, setShow] = useState(false);
  return (
    <Container show={show}>
      <div>
        <h2>آموزش ورود به متاورس</h2>
        {/* <h3 onClick={() => setShow(true)}>محتوای متنی</h3> */}
      </div>
      <p>
        شما با استفاده از ورود میتوانید در متاورس رنگ حضور پیدا کنید و از خدمات
        آن بهره مند شوید ازخدمات متاورس رنگ میتوان به خرید و فروش VOD, فروشندگی
        محصول, کسب علم و دانش توسط دانشگاه ها و موسسه های موجود در متاورس رنگ
        اشاره کرد.
      </p>
    </Container>
  );
};

export default Content;
