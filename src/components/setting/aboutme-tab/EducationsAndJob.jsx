import styled from "styled-components";
import { useGlobalState } from "./GlobalStateProvider";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  direction: rtl;

  div {
    width: 100%;
  }

  @media (min-width: 1366px) {
    flex-direction: row;
    div {
      width: 48%;
    }
  }
`;

const Label = styled.label`
  color: #ffffff;
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #454545;
  background-color: #2c2c2c;
  color: #fff;
  padding: 10px 12px;
  outline: none;
`;

const Select = styled.select`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #454545;
  background-color: #2c2c2c;
  color: #fff;
  padding: 10px 12px;
  outline: none;
  color: #84858f;
`;

const EducationsAndJob = () => {
  const { state, dispatch } = useGlobalState();

  const handleEducationChange = (e) => {
    dispatch({ type: "SET_EDUCATIONS", payload: e.target.value });
  };

  const handleJobChange = (e) => {
    dispatch({ type: "SET_JOB", payload: e.target.value });
  };

  return (
    <Container>
      <div>
        <Label htmlFor="education">تحصیلات (نام شهروند)</Label>
        <Select
          id="education"
          value={state.educations}
          onChange={handleEducationChange}
        >
          <option value="">تحصیلات (نام شهروند)</option>
          <option value="diploma">دیپلم</option>
          <option value="license">لیسانس</option>
          <option value="Engineer">ارشد</option>
          <option value="doctor">دکتری</option>
        </Select>
      </div>
      <div>
        <Label htmlFor="job">شغل (نام شهروند) در فیزیک</Label>
        <Input
          id="job"
          value={state.job}
          onChange={handleJobChange}
          placeholder="شغل (نام شهروند) در فیزیک"
        />
      </div>
    </Container>
  );
};

export default EducationsAndJob;
