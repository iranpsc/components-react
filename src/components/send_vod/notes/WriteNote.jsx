import { useContext, useEffect, useRef, useState } from "react";

import { AlertContext } from "../../../App";
import Button from "../../Button";
import SendNote from "./SendNote";
import Title from "../../Title";
import WriteNoteInput from "./WriteNoteInput";
import styled from "styled-components";

const Subject = styled.div`
  input {
    background-color: #2c2c2c;
    border: 1px solid #454545;
    border-radius: 5px;
    padding: 10px 12px;
    outline: none;
    color: #84858f;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
  }
`;
const Label = styled.h3`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
  white-space: nowrap;
`;
const Container = styled.div`
  background-color: #1a1a18;
  padding: 20px;
  height: 600px;
  overflow-y: auto;
  border-radius: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  text-align: right;
`;

const WriteNote = () => {
    const { alert, setAlert } = useContext(AlertContext);
    const [error, setError] = useState("");
   
  
    useEffect(() => {
      if (alert) {
        const timer = setTimeout(() => {
          setAlert(false);
        }, 2000);
  
        return () => clearTimeout(timer);
      }
    }, [alert, setAlert]);
  
  return (
    <Container>
      <Title title="نوشتن یادداشت" />
      <Subject>
        <Label>عنوان</Label>
        <input type="text" placeholder="عنوان" />
      </Subject>
      <WriteNoteInput/>
      <SendNote/>
      <div dir="rtl">
        <Button fit label="ذخیره" />
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}

    </Container>
  );
};

export default WriteNote;
