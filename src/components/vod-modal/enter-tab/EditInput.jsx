import styled from "styled-components";

const Container = styled.div`
  border-radius: 5px;
  border: 1px solid
    ${(props) =>
      props.identityError && props.value === "" ? "red" : "#454545"};
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: #2c2c2c;
  height: 48px;
  padding: 0 10px;
  input {
    color: white;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
  }
`;
const EditInput = ({
  id,
  icon,
  title,
  type,
  onchange,
  value,
  name,
  identityError,
}) => {
  return (
    <Container identityError={identityError} value={value}>
      <input
        placeholder={title}
        value={value}
        onChange={onchange}
        type={type || "text"}
        name={name}
      />
      {(id === 1) | (id === 2) ? (
        <img width={28} height={28} src={icon} alt={title} />
      ) : (
        ""
      )}
    </Container>
  );
};

export default EditInput;
