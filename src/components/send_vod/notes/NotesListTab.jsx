import {
  GlobalNoteStateProvider,
  useGlobalNotesState,
} from "../GlobalNoteStateProvider";

import Notes from "./Notes";
import WriteNote from "../../../components/send_vod/notes/WriteNote";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0;
  display: grid;
  gap: 30px;
  grid-template-columns: 2fr 3fr;
`;

const NotesListTab = () => {
  const { state, dispatch } = useGlobalNotesState();
  console.log(state);
  return (
    <Container>
      <WriteNote />
      <Notes notes={state.notes} />
    </Container>
  );
};

export default NotesListTab;
