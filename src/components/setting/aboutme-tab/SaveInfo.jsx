import Button from "../../Button";
import Title from "../../Title";
import styled from "styled-components";
import { useGlobalState } from "./GlobalStateProvider";

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  direction: rtl;
  justify-content: space-between;
`;
const Text = styled.div`
  p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
  }
`;
const SaveInfo = () => {
  const { state } = useGlobalState();
  const saveInfo = () => {
    console.log(state);
  };
  return (
    <Header>
      <Text>
        <Title title="درباره من" />
        <p>
          توضیحاتی درباره خود در این بخش بنویسید تا شهروندان با شما آشنا شوند
        </p>
      </Text>
      <Button label="ذخیره شود" fit onclick={saveInfo} />
    </Header>
  );
};

export default SaveInfo;
