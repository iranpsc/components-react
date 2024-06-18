import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  h3 {
    color: white;
    font-size: 16px;
    font-weight: 400;
  }
  p {
    color: #969696;
    font-size: 16px;
    font-weight: 400;
  }

  input {
    border-radius: 5px;
    background-color: #272727;
    border: 1px solid #2c2c2c;
    padding: 14px 18px 14px 18px;
    outline: none;
    width: 93%;
    color: #bababa;
    margin-top: 20px;
  }

  button {
    border-radius: 5px;
    height: 50px;
    width: 100%;
    background-color: #004531;
    border: 1px solid #18c08f;
    margin-top: 30px;
    margin-bottom: 15px;
    color: #18c08f;
    cursor: pointer;
  }
`;

const Div = styled.div`
  height: fit-content;
  position: relative;
  span {
    position: absolute;
    right: 45px;
    top: 32px;
    color: #bababa;
  }
`;

const FirstStep = ({ setStep, time, setTime }) => {
  return (
    <Container>
      <h3>مدت زمان</h3>
      <p>مدت زمانی که میخواهید کیف پولتان خاموش بماند.</p>
      <Div>
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          type="number"
          placeholder="مدت زمان (دقیقه)"
          maxLength={3}
          min={0}
          max={200}
          step={1}
        />
        {time !== "" && <span>دقیقه</span>}
      </Div>
      <button
        onClick={() => {
          if (time !== "") {
            setStep(2);
          }
        }}
      >
        ادامه
      </button>
    </Container>
  );
};

export default FirstStep;
