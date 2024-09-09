import { useContext, useEffect, useRef, useState } from "react";

import { AlertContext } from "../../../App";
import Button from "../../Button";
import EditInput from "../EditInput";
import SendFiles from "../SendFiles";
import styled from "styled-components";
import { useGlobalState } from "../GlobalVodStateProvider";

const Container = styled.div`
  background-color: #1a1a18;
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
`;

const EditNote = ({ isEditing, description }) => {
  const { state, dispatch } = useGlobalState();
  const { alert, setAlert } = useContext(AlertContext);
  const [error, setError] = useState("");
  const containerRef = useRef(null);

  const resetForm = () => {
    dispatch({ type: "SET_DESCRIPTION", payload: "" });
    dispatch({ type: "SET_FILES", payload: [] });
  };

  const saveVod = () => {
    if (state.description && state.files.length > 0) {
      if (containerRef.current) {
        containerRef.current.scrollTo(0, 0);
      }
      setAlert(true);
      setError("");

      setTimeout(() => {
        resetForm();
      }, 2000);

      setTimeout(() => {
        setAlert(false);
      }, 2000);
    } else {
      setError("تمامی فیلدها باید قبل از ارسال گزارش پر شوند");
    }
  };

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
      <EditInput description={description} />
      <SendFiles />
      <div dir="rtl">
        <Button fit label="ذخیره" onclick={saveVod} />
      </div>
    </Container>
  );
};

export default EditNote;
