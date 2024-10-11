import { useRef, useState } from "react";

import Button from "../../Button";
import ReplyInput from "./ReplyInput";
import SendFiles from "./SendFiles";
import styled from "styled-components";

const Container = styled.div`
  background-color: #1a1a18;
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
`;

const VodReply = ({ setReply }) => {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);

  const containerRef = useRef(null);

  const handleSendReply = () => {
    setReply({
      message: message.replace(/<[^>]+>/g, ""),
      files,
    });

    setMessage("");
    setFiles([]);

    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth", 
      });
    }
  };

  return (
    <Container ref={containerRef}>
      <ReplyInput message={message} setMessage={setMessage} />
      <SendFiles files={files} setFiles={setFiles} />
      <div dir="rtl">
        <Button fit label="ارسال پاسخ" onclick={handleSendReply} />
      </div>
    </Container>
  );
};

export default VodReply;
