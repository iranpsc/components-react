import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  background-color: ${(props) => (props.fill ? "#FFC700" : "#3B3B3B")};
  color: ${(props) => (props.fill ? "#191B21" : "#949494")};
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  flex-grow: ${(props) => props.grow && "1"};
  padding: 7px 20px 4px 20px;
  svg {
    font-size: 20px;
    margin-top: 5px;
  }
  h3 {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    h3 {
      font-size: 16px;
    }
  }
`;
const ButtonIcon = ({ icon, label, fill, grow, onclick }) => {
  return (
    <Container fill={fill} grow={grow} onClick={onclick}>
      <span>{icon}</span>
      <h3>{label}</h3>
    </Container>
  );
};

export default ButtonIcon;
