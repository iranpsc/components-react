import Button from "../../Button";
import EditInput from "../../features/enter-tab/EditInput";
import { RiErrorWarningLine } from "react-icons/ri";
import Title from "../../Title";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  border-radius: 5px;
  direction: rtl;
  background-color: #1a1a18;
  order: ${props => props.id === 3 && '4' };
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 25px 0;
`;
const Warn = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  margin-bottom: 20px;
  svg {
    color: #ffc700;
  }
  h3 {
    color: #dedee9;
    font-size: 11px;
    font-weight: 400;
  }
  @media (min-width: 1400px) {
    font-size: 16px;
  }
`;

const ChangeCard = ({ id, title, warn, inputs }) => {
  return (
    <Container id={id}>
      <Title title={title} />
      {(id === 1) | (id === 2) ? (
        <Warn>
          <RiErrorWarningLine size={22} />
          <h3>{warn}</h3>
        </Warn>
      ) : (
        ""
      )}
      <Inputs>
        {inputs.map((item) => (
          <EditInput
            type={item.type}
            onchange={() => {}}
            key={item.id}
            title={item.label}
          />
        ))}
      </Inputs>
      <Button
        full
        label={id !== 2 ? "ذخیره شود" : "تایید"}
        onclick={() => {}}
      />
    </Container>
  );
};

export default ChangeCard;
