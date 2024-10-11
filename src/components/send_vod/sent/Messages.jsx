import AdminMessage from "./AdminMessage";
import CitizenMessage from "./CitizenMessage";
import VodReply from "./VodReply";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  direction: ltr;
`;

const Messages = ({ member }) => {
  const [reply, setReply] = useState({
    message: "",
    files: []
  });

  const hasReply = reply.message || reply.files.length > 0;

  return (
    <Container>
      <CitizenMessage member={member} />
      {hasReply && <AdminMessage reply={reply} />}
      <VodReply setReply={setReply} />
    </Container>
  );
};

export default Messages;
