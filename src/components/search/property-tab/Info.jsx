import psc from "../../../assets/images/shop/psc.png";
import rial from "../../../assets/images/shop/rial.png";
import styled from "styled-components";

const items = [
  { id: 1, title: "VOD آدرس", value: "تنب, ایران" },
  { id: 2, title: "شناسه مالک", value: "HM-2000000" },
  { id: 3, title: "قیمت گذاری", value: "0" },
  { id: 4, title: "قیمت گذاری", value: "0" },
];
const Container = styled.div`
display: flex;
flex-direction: column;
gap: 6px;
margin-top: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  h3{
    color: #A0A0AB;
    font-size: 14px;
    font-weight: 500;
  }
  h2 {
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => (props.textId !== 2 ? "#DEDEE9" : "#0066FF")};
    cursor: ${(props) => (props.textId === 2 && "pointer")};
  }
`;

const Info = () => {
  return (
    <Container>
      {items.map((item) => (
        <Wrapper textId={item.id} key={item.id}>
          <div>
            <h3>{item.title}</h3>
            {item.id === 3 && (
              <img
                width={20}
                height={20}
                loading="lazy"
                src={psc}
                alt={item.title}
              />
            )}
            {item.id === 4 && (
              <img
                width={20}
                height={20}
                loading="lazy"
                src={rial}
                alt={item.title}
              />
            )}
          </div>
          <h2>{item.value}</h2>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Info;
