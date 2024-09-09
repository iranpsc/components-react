import React, { useContext, useEffect, useRef, useState } from "react";

import Alert from "../Alert";
import { AlertContext } from "../../App";
import Button from "../Button";
import Description from "./Description";
import Inputs from "./Inputs";
import SendFiles from "./SendFiles";
import Title from "../Title";
import styled from "styled-components";
import { useGlobalState } from "./GlobalVodStateProvider";

const Container = styled.div`
  padding: 20px 0;
  height: 220px;
  overflow-y: auto;
  direction: ltr;
  padding-right: 15px;
  @media (min-width: 840px) {
    height: 232px;
  }
  @media (min-width: 880px) {
    height: 187px;
  }
  @media (min-width: 890px) {
    height: 256px;
  }
  @media (min-width: 900px) {
    height: 274px;
  }
  @media (min-width: 910px) {
    height: 254px;
  }
  @media (min-width: 930px) {
    height: 270px;
  }
  @media (min-width: 1024px) {
    height: 380px;
  }
  @media (min-width: 1180px) {
    height: 577px;
  }
  @media (min-width: 1280px) {
    height: 560px;
  }
  @media (min-width: 1366px) {
    height: 620px;
  }
  @media (min-width: 1920px) {
    height: 622px;
  }
  p {
    margin: 10px 0;
    direction: rtl;
    color: #dedee9;
    font-size: 16px;
    font-weight: 400;
    span {
      font-weight: 600;
      color: white;
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  text-align: right;
`;

const WriteVodTab = ({ title, subdomain }) => {
  const { state, dispatch } = useGlobalState();
  const { alert, setAlert } = useContext(AlertContext);
  const [error, setError] = useState("");
  const containerRef = useRef(null);

  const resetForm = () => {
    dispatch({ type: "SET_SUBJECT", payload: "" });
    dispatch({ type: "SET_TITLE", payload: "" });
    dispatch({ type: "SET_DESCRIPTION", payload: "" });
    dispatch({ type: "SET_FILES", payload: [] });
  };

  const sendReport = () => {
    if (
      state.subject &&
      state.title &&
      state.description &&
      state.files.length > 0
    ) {
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
    <Container ref={containerRef}>
      <Title title="نوشتن سند" right />
      {alert && (
        <Alert
          type="success"
          text={`گزارش شما با عنوان ${state.title} با موفقیت ارسال شد`}
        />
      )}
      <Inputs />
      <Description />
      <SendFiles />
      <div dir="rtl">
        <Button fit label="ارسال گزارش" onclick={sendReport} />
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default WriteVodTab;
