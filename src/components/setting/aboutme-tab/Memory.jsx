import styled from 'styled-components';
import { useGlobalState } from './GlobalStateProvider';

// Styled components
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
`;

// The component
const Memory = () => {
    const { state, dispatch } = useGlobalState();

    const handleMemoryChange = (e) => {
        dispatch({ type: 'SET_MEMORY', payload: e.target.value });
    };

    return (
        <Container>
            <Label htmlFor="memory">یک خاطره خوب بنویسید</Label>
            <TextArea
                id="memory"
                value={state.memory}
                onChange={handleMemoryChange}
                placeholder="یک خاطره خوب بنویسید..."
            />
        </Container>
    );
};

export default Memory;
