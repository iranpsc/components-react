import RichText from "./RichText";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 5px;
  border: 1px solid #454545;
  color: #ffffff;
`;
const SuggestText = () => {
  return (
    <Wrapper>
      <RichText />
    </Wrapper>
  );
};

export default SuggestText;
