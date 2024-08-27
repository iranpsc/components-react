import brush from "../../../assets/images/settings/brush.png";
import bubble from "../../../assets/images/settings/bubble.png";
import clock from "../../../assets/images/settings/clock.png";
import coffee from "../../../assets/images/settings/coffee.png";
import cpu from "../../../assets/images/settings/cpu.png";
import dollar from "../../../assets/images/settings/dollar-circle.png";
import ghost from "../../../assets/images/settings/ghost.png";
import lang from "../../../assets/images/settings/language-square.png";
import layer from "../../../assets/images/settings/layer.png";
import music from "../../../assets/images/settings/musicnote.png";
import note from "../../../assets/images/settings/note-2.png";
import pet from "../../../assets/images/settings/pet.png";
import styled from "styled-components";
import tree from "../../../assets/images/settings/tree.png";
import { useGlobalState } from "./GlobalStateProvider";
import weight from "../../../assets/images/settings/weight.png";

const Container = styled.div`
  margin-top: 20px;
  direction: rtl;
`;

const Label = styled.label`
  color: #ffffff;
  display: block;
  font-weight: 600;
`;

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 20px;
  @media (min-width: 1366px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  h4 {
    color: ${(props) => (props.limitReached ? "red" : "#dedee9")};
    font-size: 14px;
    font-weight: 400;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #ffffff;
  gap: 8px;

  span {
    color: #dedee9;
    font-size: 16px;
    font-weight: 400;
    white-space: nowrap;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    appearance: none;
    border: 2px solid #dedee9;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    position: relative;
    transition: background-color 0.3s ease;

    &:checked {
      background-color: #ffc700;
      border: 2px solid transparent;

      &::after {
        content: "✓";
        font-size: 16px;
        font-weight: 600;
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const Hobby = () => {
  const { state, dispatch } = useGlobalState();
  const maxHobbies = 5;
  const limitReached = state.hobbies.length >= maxHobbies;

  const hobbies = [
    { id: 1, name: "ساز و موسیقی", icon: music },
    { id: 2, name: "ورزش و سلامتی", icon: weight },
    { id: 3, name: "هنر", icon: brush },
    { id: 4, name: "زبان و فرهنگ", icon: lang },
    { id: 5, name: "فلسفه", icon: note },
    { id: 6, name: "حیوانات و طبیعت", icon: pet },
    { id: 7, name: "موجودات فضایی", icon: ghost },
    { id: 8, name: "غذا و آشپزی", icon: coffee },
    { id: 9, name: "سفر و تفریح", icon: tree },
    { id: 10, name: "ساخت و تولید", icon: layer },
    { id: 11, name: "علوم و تکنولوژی", icon: cpu },
    { id: 12, name: "فضا و زمان", icon: clock },
    { id: 13, name: "تاریخ و تمدن", icon: bubble },
    { id: 14, name: "سیاست و اقتصاد", icon: dollar },
  ];

  const handleHobbyChange = (hobby) => {
    if (state.hobbies.includes(hobby)) {
      const updatedHobbies = state.hobbies.filter((h) => h !== hobby);
      dispatch({ type: "SET_HOBBIES", payload: updatedHobbies });
    } else if (!limitReached) {
      const updatedHobbies = [...state.hobbies, hobby];
      dispatch({ type: "SET_HOBBIES", payload: updatedHobbies });
    }
  };

  return (
    <Container>
      <Div limitReached={limitReached}>
        <Label>علایق (نام شهروند)</Label>
        <h4>۵ مورد انتخاب کنید</h4>
      </Div>
      <CheckboxContainer>
        {hobbies.map((hobby) => (
          <CheckboxLabel key={hobby.id}>
            <input
              type="checkbox"
              checked={state.hobbies.includes(hobby.name)}
              onChange={() => handleHobbyChange(hobby.name)}
              disabled={!state.hobbies.includes(hobby.name) && limitReached}
            />
            <div>
              <img src={hobby.icon} alt={hobby.name} width={24} height={24} />
              <span>{hobby.name}</span>
            </div>
          </CheckboxLabel>
        ))}
      </CheckboxContainer>
    </Container>
  );
};

export default Hobby;
