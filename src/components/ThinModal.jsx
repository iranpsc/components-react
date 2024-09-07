import styled from "styled-components";

const Container = styled.div`
  background-color: #000000;
  width: 450px;
  position: fixed;
  top: 0;
  left : ${props => props.position === 'left' && '0' };
  right : ${props => props.position === 'right' && '0' };
  bottom: 0;
  padding: 15px 20px;
`;

const ThinModal = ({ children, position }) => {
  return <Container position={position}>{children}</Container>;
};

export default ThinModal;
