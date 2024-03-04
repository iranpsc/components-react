import { GrLocation } from "react-icons/gr";
import TextValueIcon from "../../TextValueIcon";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 15px;
`;

const ThirdRow = () => {
  return (
    <Wrapper>
      <TextValueIcon
        title="آدرس"
        value="تهران، خیابان انقلاب، کوی گلها، ساختمان بهاران "
        icon={<GrLocation />}
      />
    </Wrapper>
  );
};

export default ThirdRow;
