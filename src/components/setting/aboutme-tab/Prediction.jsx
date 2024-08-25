import styled from "styled-components";
import { useGlobalState } from "./GlobalStateProvider";

const Container = styled.div`
  margin-top: 20px;
`;

const Label = styled.label`
  color: #ffffff;
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #2c2c2c;
  color: #fff;
  resize: none;
  margin-bottom: 20px;
`;

const Prediction = () => {
  const { state, dispatch } = useGlobalState();
  
  const handleCurrentYearPredictionChange = (e) => {
    dispatch({ type: "SET_CURRENT_YEAR_PREDICTION", payload: e.target.value });
  };

  const handleNextYearPredictionChange = (e) => {
    dispatch({ type: "SET_NEXT_YEAR_PREDICTION", payload: e.target.value });
  };

  return (
    <Container>
      <Label htmlFor="currentYearPrediction">
        پیش بینی شما برای سال 1402 چیست؟
      </Label>
      <TextArea
        id="currentYearPrediction"
        value={state.currentYearPrediction}
        onChange={handleCurrentYearPredictionChange}
        placeholder="پیش بینی شما برای سال 1402 چیست؟"
      />

      <Label htmlFor="nextYearPrediction">
        پیش بینی شما برای سال 1403 چیست؟
      </Label>
      <TextArea
        id="nextYearPrediction"
        value={state.nextYearPrediction}
        onChange={handleNextYearPredictionChange}
        placeholder="پیش بینی شما برای سال 1403 چیست؟"
      />
    </Container>
  );
};

export default Prediction;
