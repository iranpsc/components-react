import styled from 'styled-components';
import { useGlobalState } from './GlobalStateProvider';

const Container = styled.div`
  margin-top: 20px;
`;

const Label = styled.label`
  color: #ffffff;
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 10px;
  color: #ffffff;

  input {
    margin-right: 5px;
  }
`;

// The component
const Hobby = () => {
    const { state, dispatch } = useGlobalState();

    const hobbies = [
        "ورزش و سلامتی",
        "موسیقی",
        "سفر و تفریح",
        "هنر",
        "کتاب خواندن",
        "پخت و پز",
        "علم و فناوری",
    ];

    const handleHobbyChange = (hobby) => {
        const updatedHobbies = state.hobbies.includes(hobby)
            ? state.hobbies.filter((h) => h !== hobby)
            : [...state.hobbies, hobby];

        dispatch({ type: 'SET_HOBBIES', payload: updatedHobbies });
    };

    return (
        <Container>
            <Label>علایق (نام شهروند)</Label>
            <CheckboxContainer>
                {hobbies.map((hobby) => (
                    <CheckboxLabel key={hobby}>
                        <input
                            type="checkbox"
                            checked={state.hobbies.includes(hobby)}
                            onChange={() => handleHobbyChange(hobby)}
                        />
                        {hobby}
                    </CheckboxLabel>
                ))}
            </CheckboxContainer>
        </Container>
    );
};

export default Hobby;
