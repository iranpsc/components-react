import styled from "styled-components";
import { useGlobalState } from "./GlobalReportStateProvider";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
  margin-top: 20px;
  direction: rtl;
`;

const Subject = styled.div`
  select {
    background-color: #2c2c2c;
    border: 1px solid #454545;
    border-radius: 5px;
    padding: 10px 12px;
    outline: none;
    color: #84858f;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
  }
`;
const Label = styled.h3`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
  white-space: nowrap;
`;

const Title = styled.div`
  input {
    background-color: #2c2c2c;
    border: 1px solid #454545;
    border-radius: 5px;
    padding: 10px 12px;
    outline: none;
    color: #84858f;
    width: 96.5%;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Inputs = () => {
  const options = [
    { id: 1, label: "خطا در نمایش", value: "display" },
    { id: 2, label: "خطا در املا", value: "spell" },
    { id: 3, label: "خطا در کدنویسی", value: "code" },
    { id: 4, label: "FBS کندی سامانه", value: "delay" },
    { id: 5, label: "بی احترامی", value: "respect" },
  ];

  const { state, dispatch } = useGlobalState();
  const subjectHandler = (e) => {
    const value = e.target.value;
    dispatch({ type: "SET_SUBJECT", payload: value });
  };

  const titleHandler = (e) => {
    const value = e.target.value;
    if (value.length < 21) {
      dispatch({ type: "SET_TITLE", payload: value });
    }
  };

  return (
    <Container>
      <Subject>
        <Label>موضوع گزارش را انتخاب کنید</Label>
        <select value={state.subject} onChange={(e) => subjectHandler(e)}>
          <option value="">موضوع گزارش را انتخاب کنید</option>
          {options.map((option) => (
            <option value={option.value} key={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </Subject>
      <Title>
        <Label>عنوان گزارش</Label>
        <input
          type="text"
          placeholder="عنوان گزارش"
          value={state.title}
          onChange={(e) => titleHandler(e)}
        />
      </Title>
    </Container>
  );
};

export default Inputs;
