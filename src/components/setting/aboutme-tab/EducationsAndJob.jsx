import styled from "styled-components";
import { useGlobalState } from "./GlobalStateProvider";

// Styled components
const Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Label = styled.label`
  color: #ffffff;
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #2c2c2c;
  color: #fff;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #2c2c2c;
  color: #fff;
`;

// The component
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
        <Input
          id="education"
          value={state.educations}
          onChange={handleEducationChange}
          placeholder="تحصیلات (نام شهروند)"
        />
      </div>
      <div>
        <Label htmlFor="job">شغل (نام شهروند)</Label>
        <Select id="job" value={state.job} onChange={handleJobChange}>
          <option value="">انتخاب شغل</option>
          <option value="Software Developer">توسعه‌دهنده نرم‌افزار</option>
          <option value="Designer">طراح</option>
          <option value="Engineer">مهندس</option>
          <option value="Teacher">معلم</option>
          <option value="Doctor">پزشک</option>
        </Select>
      </div>
    </Container>
  );
};

export default EducationsAndJob;
