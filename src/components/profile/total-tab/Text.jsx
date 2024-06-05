import { AiOutlineEdit } from "react-icons/ai";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    gap: 8px;
    margin-top: 5px;
    margin-right: auto;
    width: fit-content;
    h3 {
      color: #a0a0ab;
      font-size: 13px;
    }
    svg {
      color: #dedee9;
    }
  }
`;
const Info = styled.p`
  color: #dedee9;
  font-size: 16px;
  padding: 10px 12px;
  border: 1px solid #dedee9;
  background-color: #454545;
  border-radius: 5px;
`;
const Text = () => {
  return (
    <Container>
      <Info>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد
      </Info>
      <div>
        <h3>۷۸ کاراکتر</h3>
        <span>
          <AiOutlineEdit />
        </span>
      </div>
    </Container>
  );
};

export default Text;
