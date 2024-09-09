import NotesList from "./NotesList";
import SearchInput from "../../../components/SearchInput";
import Title from "../../../components/Title";
import styled from "styled-components";

const Container = styled.div`
  /* padding-right: 15px; */
  height: 550px;
  overflow-y: auto;
`;

const Notes = ({ notes }) => {
  return (
    <Container>
      <Title title="یادداشت ها" />
      <SearchInput placeholder="جستجو عنوان یادداشت" onchange={() => {}} />
      <NotesList notes={notes} />
    </Container>
  );
};

export default Notes;
