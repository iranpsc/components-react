import AdminMessage from "../AdminMessage";
import CitizenMessage from "../CitizenMessage";
import { EditContext } from "./NoteDetails";
import EditNote from "./EditNote";
import styled from "styled-components";
import { useContext } from "react";

const Container = styled.div`
  direction: ltr;
`;
const NoteMessages = ({ member, description }) => {
  const { isEditing, setIsEditing } = useContext(EditContext);
  console.log(isEditing);
  return (
    <Container>
      {!isEditing && (
        <CitizenMessage
          member={member}
          isEditing={isEditing}
          description={description}
        />
      )}
      {/* <AdminMessage /> */}
      {isEditing && (
        <EditNote isEditing={isEditing} description={description} />
      )}
    </Container>
  );
};

export default NoteMessages;
