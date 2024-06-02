import AddFirstBankCard from "./AddFirstBankCard";
import AddSecondBankCard from "./AddSecondBankCard";
import ConfirmFirstDelete from "./ConfirmFirstDelete";
import ConfirmSecondDelete from "./ConfirmSecondDelete";
import { HiOutlineTrash } from "react-icons/hi";
import bank from "../../../assets/images/auth/bank-melat.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const NationCard = styled.div`
  cursor: pointer;
`;

const BankCard = styled.div`
  cursor: pointer;
`;
const Image = styled.div`
  position: relative;
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
    width: 320px;
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
  /* background: url("/src/assets/images/auth/Shapes.png") no-repeat; */
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
  bankFirstCardImage,
  setBankFirstCardImage,
  bankSecondCardImage,
  setBankSecondCardImage,
  openConfirmFirstModal,
  setOpenConfirmFirstModal,
  openConfirmSecondModal,
  setOpenConfirmSecondModal,
  openFirstCardNumberModal,
  setOpenFirstCardNumberModal,
  openSecondCardNumberModal,
  setOpenSecondCardNumberModal,
}) => {
  return (
    <>
      <Container>
        <NationCard>
          <UploadWrapper>
            {!bankFirstCardImage.bankCard && !bankFirstCardImage.shabaCard && (
              <Upload onClick={() => setOpenFirstCardNumberModal(true)}>
                +<span>افزودن کارت بانکی</span>
              </Upload>
            )}
            {bankFirstCardImage.bankCard && bankFirstCardImage.shabaCard && (
              <Image>
                <IconWrapper onClick={() => setOpenConfirmFirstModal(true)}>
                  <HiOutlineTrash />
                </IconWrapper>
                <DisplayCard>
                  <CardNumber>
                    <div>
                      <img width={60} src={bank} alt="bank-logo" />
                      <span>بانک ملت</span>
                    </div>
                    <h2>
                      {bankFirstCardImage.bankCard.replace(
                        /(\d{4})(?=\d)/g,
                        "$1 "
                      )}
                    </h2>
                  </CardNumber>
                  <CardShaba>
                    <span>شماره شبا</span>
                    <h3>IR-{bankFirstCardImage.shabaCard}</h3>
                  </CardShaba>
                </DisplayCard>
              </Image>
            )}
          </UploadWrapper>
        </NationCard>
        <BankCard>
          <UploadWrapper>
            {!bankSecondCardImage.bankCard &&
              !bankSecondCardImage.shabaCard && (
                <Upload onClick={() => setOpenSecondCardNumberModal(true)}>
                  +<span>افزودن کارت بانکی</span>
                </Upload>
              )}
            {bankSecondCardImage.bankCard && bankSecondCardImage.shabaCard && (
              <Image>
                <IconWrapper onClick={() => setOpenConfirmSecondModal(true)}>
                  <HiOutlineTrash />
                </IconWrapper>
                <DisplayCard>
                  <CardNumber>
                    <div>
                      <img width={60} src={bank} alt="bank-logo" />
                      <span>بانک ملت</span>
                    </div>
                    <h2>
                      {bankSecondCardImage.bankCard.replace(
                        /(\d{4})(?=\d)/g,
                        "$1 "
                      )}
                    </h2>
                  </CardNumber>
                  <CardShaba>
                    <span>شماره شبا</span>
                    <h3>IR-{bankSecondCardImage.shabaCard}</h3>
                  </CardShaba>
                </DisplayCard>
              </Image>
            )}
          </UploadWrapper>
        </BankCard>
      </Container>
      {openConfirmFirstModal && (
        <ConfirmFirstDelete
          setBankFirstCardImage={setBankFirstCardImage}
          bankFirstCardImage={bankFirstCardImage.bankCard}
          setOpenConfirmFirstModal={setOpenConfirmFirstModal}
        />
      )}
      {openFirstCardNumberModal && (
        <AddFirstBankCard
          setBankFirstCardImage={setBankFirstCardImage}
          bankFirstCardImage={bankFirstCardImage}
          setOpenFirstCardNumberModal={setOpenFirstCardNumberModal}
        />
      )}
      {openConfirmSecondModal && (
        <ConfirmSecondDelete
          setBankSecondCardImage={setBankSecondCardImage}
          bankSecondCardImage={bankSecondCardImage.bankCard}
          setOpenConfirmSecondModal={setOpenConfirmSecondModal}
        />
      )}
      {openSecondCardNumberModal && (
        <AddSecondBankCard
          setBankSecondCardImage={setBankSecondCardImage}
          bankSecondCardImage={bankSecondCardImage}
          setOpenSecondCardNumberModal={setOpenSecondCardNumberModal}
        />
      )}
    </>
  );
};

export default BankCardsUpload;
