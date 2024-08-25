import { AiOutlineExclamationCircle } from "react-icons/ai";
import DetailsModal from "./DetailsModal";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  background-color: #000000;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  svg{
    cursor: pointer;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
  }
  span {
    color: #ffc700;
    font-size: 16px;
    font-weight: 600;
  }
`;
const KeyValue = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    color: #dedee9;
    font-weight: 500;
    font-size: 18px;
  }
  span {
    color: #a0a0ab;
    font-size: 18px;
    font-weight: 500;
  }
`;

const Details = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Container>
      <Header>
        <h3>جزییات ملک</h3>
        <span>QA31-11213</span>
      </Header>
      <KeyValue>
        <h3>متراژ</h3>
        <span>۲۱۰</span>
      </KeyValue>
      <KeyValue>
        <h3>تراکم</h3>
        <span>۲</span>
      </KeyValue>
      <KeyValue>
        <h3 style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          افزایش سود از ملک
          <AiOutlineExclamationCircle onClick={() => setOpenModal(true)} />
        </h3>
        <span>۱٪</span>
      </KeyValue>
      <KeyValue>
        <h3>تعداد اعضا</h3>
        <span>۸</span>
      </KeyValue>
      <KeyValue>
        <h3 style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          قابلیت انتقال{" "}
          <AiOutlineExclamationCircle onClick={() => setOpenModal(true)} />
        </h3>
        <span>۲۰ : ۱۲ : ۴۴</span>
      </KeyValue>
      {openModal && <DetailsModal setOpenModal={setOpenModal} />}
    </Container>
  );
};

export default Details;
