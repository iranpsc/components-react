import EditInput from "../../features/enter-tab/EditInput";
import styled from "styled-components";

const BackGround = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.713);
`;
const Modal = styled.div`
  border-radius: 10px;
  background-color: #000000;
  padding: 20px;
  width: 100%;
  max-width: 515px;
  max-height: 363px;
  display: flex;
  gap: 30px;
  flex-direction: column;
`;
const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  text-align: right;
  color: #ffffff;
  @media (max-width: 1023px) {
    font-size: 18px;
  }
`;

const Inputs = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
`;

const Button = styled.button`
  border-radius: 10px;
  background-color: #ffc700;
  color: black;
  border: none;
  padding: 0 14px;
  width: fit-content;
  height: 45px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  color: #191b21;
  font-family: inherit;
`;
const AddFirstBankCard = ({
  bankFirstCardImage,
  setOpenFirstCardNumberModal,
  setBankFirstCardImage,
}) => {
  return (
    <BackGround>
      <Modal>
        <Title>افزودن کارت</Title>
        <Inputs>
          <EditInput
            title="شماره کارت"
            value={bankFirstCardImage.bankCard}
            type="number"
            onchange={(e) => {
              const inputValue = e.target.value;
              if (inputValue.length < 17) {
                setBankFirstCardImage((prev) => ({
                  ...prev,
                  bankCard: inputValue,
                }));
              }
            }}
          />
          <EditInput
            title="شماره شبا"
            type="number"
            value={bankFirstCardImage.shabaCard}
            onchange={(e) => {
              const inputValue = e.target.value;
              if (inputValue.length < 25) {
                setBankFirstCardImage((prev) => ({
                  ...prev,
                  shabaCard: inputValue,
                }));
              }
            }}
          />
        </Inputs>
        <Button
          onClick={() => {
            if (
              bankFirstCardImage.bankCard !== "" &&
              bankFirstCardImage.shabaCard !== ""
            ) {
              setOpenFirstCardNumberModal(false);
            }
          }}
        >
          افزودن کارت
        </Button>
      </Modal>
    </BackGround>
  );
};

export default AddFirstBankCard;
