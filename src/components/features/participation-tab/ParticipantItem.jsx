import { AiTwotoneEdit } from "react-icons/ai";
import DeleteConfirmModal from "./DeleteConfirmModal";
import EditConfirmModal from "./EditConfirmModal";
import { FiTrash2 } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import TitleValue from "../../shop/TitleValue";
import UserCode from "../../UserCode";
import satisfy from "../../../assets/images/player/satisfy.png";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  background-color: #1a1a18;
  border-radius: 5px;
  padding: 20px;
  direction: rtl;
`;
const ParticipantSummary = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 2fr 2fr;
  gap: 10px;
  flex-grow: 1;
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1.5fr 1fr 1.2fr 1.2fr 1.2fr;
    gap: 50px;
  }
`;
const ParticipantInfo = styled.div`
  background-color: #000000;
  border-radius: 5px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const SatisfyContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: #dedee9;
    font-size: 14px;
  }
  @media (min-width: 998px) {
    font-size: 16px;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  h3 {
    color: #a0a0ab;
    font-size: 12px;
    font-weight: 500;
  }
  @media (min-width: 998px) {
    h3 {
      font-size: 14px;
    }
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  @media (min-width: 1500px) {
    flex-direction: row;
  }
`;
const Button = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (min-width: 1024px) {
    width: 36px;
    height: 36px;
  }
`;
const Div = styled.div`
  display: flex;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const ParticipantItem = ({ time, debt, level, satisfyCount, options }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteParticipant, setDeleteParticipant] = useState(false);
  return (
    <>
      <Container>
        <Div>
          <ParticipantSummary>
            <UserCode title="شناسه کاربر" code="HM-2000081" />
            <TitleValue title="تاریخ و زمان" value={time} />
            <TitleValue title="بدهی مشارکت" value={debt} />
            <TitleValue title="میزان مشارکت" value={level} />
            <SatisfyContainer>
              <Title>
                <h3>رضایت لانچ شده</h3>
                <img src={satisfy} alt="pricing" width={18} height={18} />
              </Title>
              <span>{satisfyCount}</span>
            </SatisfyContainer>
          </ParticipantSummary>
          <Buttons>
            <Button onClick={() => setDeleteParticipant(true)}>
              <FiTrash2 />
            </Button>
            <Button onClick={() => setEdit(true)}>
              <AiTwotoneEdit />
            </Button>
            <Button onClick={() => setOpenOptions(!openOptions)}>
              <IoIosArrowDown
                style={{
                  transform: `${openOptions ? "rotate(180deg)" : "rotate(0)"}`,
                }}
              />
            </Button>
          </Buttons>
        </Div>
        {openOptions && (
          <InfoWrapper>
            {options.map((option) => (
              <ParticipantInfo key={option.id}>
                <TitleValue
                  title="تاریخ و زمان ثبت رضایت"
                  value={option.submit}
                />
                <TitleValue
                  title="تاریخ و زمان تغییر رضایت"
                  value={option.change}
                />
                <SatisfyContainer>
                  <Title>
                    <h3>رضایت لانچ شده</h3>
                    <img src={satisfy} alt="pricing" width={18} height={18} />
                  </Title>
                  <span>{satisfyCount}</span>
                </SatisfyContainer>
              </ParticipantInfo>
            ))}
          </InfoWrapper>
        )}
      </Container>
      {edit && <EditConfirmModal setEdit={setEdit} />}
      {deleteParticipant && (
        <DeleteConfirmModal setDeleteParticipant={setDeleteParticipant} />
      )}
    </>
  );
};

export default ParticipantItem;
