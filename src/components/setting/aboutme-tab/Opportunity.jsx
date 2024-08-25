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
const Opportunity = () => {
    const { state, dispatch } = useGlobalState();

    const handleOpportunityChange = (e) => {
        dispatch({ type: 'SET_OPPORTUNITY', payload: e.target.value });
    };

    return (
        <Container>
            <Label htmlFor="opportunity">اگر فرصتی برای حل یک مشکل داشتی آن مشکل چی بود؟</Label>
            <TextArea
                id="opportunity"
                value={state.opportunity}
                onChange={handleOpportunityChange}
                placeholder="اگر فرصتی برای حل یک مشکل داشتی آن مشکل چی بود؟"
            />
        </Container>
    );
};

export default Opportunity;
