import styled from "styled-components";

const TabsWrapper = styled.div`
  border-bottom: 1px solid #454545;
  justify-content: flex-start;
  display: flex;
`;

const TabItem = styled.h3`
  color: #ffc700;
  font-weight: 500;
  width: 25%;
  margin: 0;
  font-size: 16px;
  padding: 8px 26px;
  cursor: pointer;
  border-bottom: 2px solid #ffc700;
  @media (min-width: 998px) {
    font-size: 18px;
  }
`;

const Tabs = () => {
  return (
    <TabsWrapper>
      <TabItem>سود املاک</TabItem>
    </TabsWrapper>
  );
};

export default Tabs;
