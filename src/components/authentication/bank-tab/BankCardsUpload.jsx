import AddBankCard from "./AddBankCard";
import ConfirmCardDelete from "./ConfirmCardDelete";
import { HiOutlineTrash } from "react-icons/hi";
import bank from "../../../assets/images/auth/bank-melat.png";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const BankCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;
`;
const Image = styled.div`
  position: relative;
  background-color: #0066FF;
`;

const UploadWrapper = styled.div`
  width: 250px;
  height: 190px;
  overflow: hidden;
  border-radius: 10px;
  div {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  @media (min-width: 840px) {
    width: 305px;
    height: 190px;
  }
  @media (min-width: 940px) {
    width: 380px;
    height: 190px;
  }
`;

const DisplayCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardNumber = styled.div`
  background-color: #0066ff;
  flex-grow: 2;
  height: 70% !important;
  background: url("/src/assets/images/auth/Shapes.png") no-repeat;
  div {
    display: flex;
    align-items: start;
    gap: 5px;
    height: fit-content;
    margin-right: 10px;
    margin-top: 10px;
    img {
      width: 20px;
    }
    span {
      font-size: 12px;
      color: white;
    }
  }
  h2 {
    color: white;
    text-align: center;
    margin-top: 20px;
  }
`;

const CardShaba = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: yellow;
  flex-direction: column;
  gap: 5px;
  background-color: #1a1a18;
  height: 30% !important;

  padding: 10px 40px;
  span {
    font-size: 12px;
    color: #a0a0ab;
    font-weight: 600;
  }
  h3 {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
  }
`;
const Upload = styled.div`
  height: 97% !important;
  width: 97% !important;
  border-radius: 10px;
  border: 2px dashed #454545;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 46px;
  color: #dedee9;
  position: relative;
  flex-grow: 1;
  span {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
  }
`;
const IconWrapper = styled.div`
  width: 24px !important;
  height: 24px !important;
  border-radius: 100%;
  position: absolute;
  left: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc700;
  svg {
    font-size: 17px;
    cursor: pointer;
  }
`;

const BankCardsUpload = ({
  cards,
  setCards,
  openAddModal,
  setOpenAddModal,
  openDeleteModal,
  setOpenDeleteModal,
}) => {
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleDeleteCard = (index) => {
    setDeleteIndex(index);
    setOpenDeleteModal(true);
  };

  return (
    <>
      <Container>
        <BankCard>
          {Object.values(cards).map((card, i) => (
            <UploadWrapper key={i}>
              <Image>
                <IconWrapper onClick={() => handleDeleteCard(i)}>
                  <HiOutlineTrash />
                </IconWrapper>
                <DisplayCard>
                  <CardNumber>
                    <div>
                      <img width={60} src={bank} alt="bank-logo" />
                      <span>بانک ملت</span>
                    </div>
                    <h2>{card.cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ")}</h2>{" "}
                  </CardNumber>
                  <CardShaba>
                    <span>شماره شبا</span>
                    <h3>IR-{card.shabaNumber}</h3>
                  </CardShaba>
                </DisplayCard>
              </Image>
            </UploadWrapper>
          ))}

          <UploadWrapper>
            <Upload onClick={() => setOpenAddModal(true)}>
              +<span>افزودن کارت بانکی</span>
            </Upload>
          </UploadWrapper>
        </BankCard>
      </Container>

      {deleteIndex !== null && openDeleteModal && (
        <ConfirmCardDelete
          setOpenDeleteModal={setOpenDeleteModal}
          setCards={setCards}
          deleteIndex={deleteIndex}
        />
      )}

      {openAddModal && (
        <AddBankCard setOpenAddModal={setOpenAddModal} setCards={setCards} />
      )}
    </>
  );
};

export default BankCardsUpload;
