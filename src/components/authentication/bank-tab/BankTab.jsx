import Alert from "../../Alert";
import BankCardsUpload from "./BankCardsUpload";
import ErrorModal from "../ErrorModal";
import Title from "../../Title";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  direction: rtl;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Container = styled.div`
  margin: 20px 0;
  overflow-y: auto;
  direction: ltr;
  height: 70%;
  @media (min-width: 1024px) {
    height: 70%;
  }
  @media (min-width: 1180px) {
    height: 80%;
  }
  @media (min-width: 1500px) {
    grid-template-columns: 2fr 3fr;
  }
`;
const BankTab = ({ setOpenErrorModal, openErrorModal }) => {
  const [isError, setIsError] = useState(false);

  const [bankFirstCardImage, setBankFirstCardImage] = useState({
    cardNumber: "",
    shabaCard: "",
  });
  const [bankSecondCardImage, setBankSecondCardImage] = useState({
    cardNumber: "",
    shabaCard: "",
  });
  const [openConfirmFirstModal, setOpenConfirmFirstModal] = useState(false);
  const [openConfirmSecondModal, setOpenConfirmSecondModal] = useState(false);
  const [openFirstCardNumberModal, setOpenFirstCardNumberModal] =
    useState(false);
  const [openSecondCardNumberModal, setOpenSecondCardNumberModal] =
    useState(false);
  return (
    <Container>
      <Wrapper>
        <Title title="کارت های بانکی" />
        {!isError && (
          <Alert
            onclick={() => setOpenErrorModal(true)}
            buttonText="مشاهده خطاها"
            text="خطا در ثبت کارت جدید، اطلاعات کارت به درستی وارد نشده است "
            info="خطا در ثبت کارت"
            type="error"
          />
        )}
        <BankCardsUpload
          bankFirstCardImage={bankFirstCardImage}
          setBankFirstCardImage={setBankFirstCardImage}
          bankSecondCardImage={bankSecondCardImage}
          setBankSecondCardImage={setBankSecondCardImage}
          openConfirmFirstModal={openConfirmFirstModal}
          setOpenConfirmFirstModal={setOpenConfirmFirstModal}
          openConfirmSecondModal={openConfirmSecondModal}
          setOpenConfirmSecondModal={setOpenConfirmSecondModal}
          openFirstCardNumberModal={openFirstCardNumberModal}
          setOpenFirstCardNumberModal={setOpenFirstCardNumberModal}
          openSecondCardNumberModal={openSecondCardNumberModal}
          setOpenSecondCardNumberModal={setOpenSecondCardNumberModal}
        />
      </Wrapper>
      {openErrorModal && <ErrorModal setOpenErrorModal={setOpenErrorModal} />}
    </Container>
  );
};

export default BankTab;
