import "react-quill/dist/quill.snow.css";

import { useEffect, useState } from "react";

import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";
import { convertToPersian } from "../../lib/convertToPersian";
import styled from "styled-components";
import { useGlobalState } from "./GlobalVodStateProvider";

const EditorContainer = styled.div`
  background-color: #2c2c2c;
  border-radius: 5px;
  overflow: hidden;
  color: white;
  direction: rtl;
  margin: 10px auto;
  height: 212px;
  overflow: auto;

  .ql-toolbar {
    background-color: #2c2c2c;
    border: none;
    border-bottom: 1px solid gray;
  }

  .ql-container {
    background-color: #2c2c2c;
    direction: rtl;
    text-align: right;
    border: none !important;
  }

  .ql-container * {
    background-color: #2c2c2c;
    color: #84858f;
    font-family: inherit;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    direction: rtl;
    text-align: right;
  }

  .ql-editor {
    background-color: #2c2c2c;
    color: red !important;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    min-height: 150px;
    direction: rtl;
    text-align: right;
  }

  .ql-editor:focus {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }

  .ql-editor:before,
  .ql-editor:after {
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
  }

  .ql-toolbar .ql-picker {
    color: white;
  }

  .ql-toolbar .ql-stroke {
    stroke: white;
  }

  .ql-toolbar .ql-fill {
    fill: white;
  }

  .ql-toolbar .ql-picker-label,
  .ql-toolbar .ql-picker-options {
    color: white;
    background-color: #444;
  }

  .ql-toolbar .ql-picker-options {
    border: 1px solid #555;
  }

  .ql-toolbar .ql-picker-label:hover,
  .ql-toolbar .ql-picker-options:hover {
    color: #ddd;
    background-color: #555;
  }
`;

const Char = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;
  direction: rtl;

  svg {
    color: ${({ isOverLimit }) => (isOverLimit ? "red" : "#ffffff")};
  }

  span {
    color: ${({ isOverLimit }) => (isOverLimit ? "red" : "#a0a0ab")};
    font-size: 13px;
    font-weight: 400;
  }
`;

const Label = styled.h2`
  color: #ffffff;
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
  margin-top: 20px;
  direction: rtl;
`;

const Description = () => {
  const { state, dispatch } = useGlobalState();
  const charLimit = 2000;
  
  const [description, setDescription] = useState(state.description); // Local state for the editor value

  useEffect(() => {
    setDescription(state.description); // Sync local state with global state
  }, [state.description]);

  const handleChange = (value) => {
    setDescription(value);
    // Ensure the dispatch only occurs if the character limit is not exceeded
    if (value.length <= charLimit) {
      dispatch({ type: "SET_DESCRIPTION", payload: value });
    }
  };

  const handleKeyDown = (event) => {
    // If character limit is reached and the key pressed is not backspace or delete
    if (description.length >= charLimit && event.key !== "Backspace" && event.key !== "Delete") {
      event.preventDefault(); // Prevent further input
    }
  };

  const currentLength = description.length;
  const remainingChars = charLimit - currentLength;
  const isOverLimit = remainingChars <= 0;

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "code-block"],
      [{ align: [] }],
    ],
  };

  const formats = [
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "code-block",
    "align",
  ];

  return (
    <>
      <Label>متن سند</Label>
      <EditorContainer>
        <ReactQuill
          value={description}
          onChange={handleChange}
          onKeyDown={handleKeyDown} // Add the onKeyDown event
          modules={modules}
          formats={formats}
        />
      </EditorContainer>
      <Char isOverLimit={isOverLimit}>
        <span>{convertToPersian(remainingChars)} کاراکتر</span>
        <CiEdit size={20} />
      </Char>
    </>
  );
};

export default Description;
