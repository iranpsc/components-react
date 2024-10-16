import "react-quill/dist/quill.snow.css";

import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";
import { convertToPersian } from "../../../lib/convertToPersian";
import styled from "styled-components";
import { useGlobalState } from "./GlobalStateProvider";

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
    color: white;
    border: none;
    direction: rtl;
    text-align: right;
  }

  .ql-editor {
    min-height: 150px;
    direction: rtl;
    text-align: right;
  }

  .ql-editor::before {
    content: attr(data-placeholder);
    color: #a0a0ab;
    font-style: italic;
    position: absolute;
    left: 0;
    right: 20px;
    font-family: inherit;
    text-align: right;
    pointer-events: none;
    display: block;
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

const Label = styled.h2`
  color: #ffffff;
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
  margin-top: 20px;
`;

const Char = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;

  svg {
    color: ${({ isOverLimit }) => (isOverLimit ? "red" : "#ffffff")};
  }

  span {
    color: ${({ isOverLimit }) => (isOverLimit ? "red" : "#a0a0ab")};
    font-size: 13px;
    font-weight: 400;
  }
`;

const NextYear = () => {
  const { state, dispatch } = useGlobalState();
  const charLimit = 10000;
console.log(state);
  const handleChange = (value) => {
    if (value.length <= charLimit) {
      dispatch({ type: "SET_NEXT_YEAR_PREDICTION", payload: value });
    }
  };

  const currentLength = state.prediction2024.length;
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
      ["link", "image", "code-block"],
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
    "image",
    "code-block",
    "align",
  ];

  return (
    <>
      <Label>پیش بینی شما برای سال ۱۴۰۴ چیست؟</Label>
      <EditorContainer>
        <ReactQuill
          value={state.prediction2024}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          // placeholder="پیش بینی شما برای سال ۱۴۰۴ چیست؟"
        />
      </EditorContainer>
      <Char isOverLimit={isOverLimit}>
        <span>{convertToPersian(remainingChars)} کاراکتر</span>
        <CiEdit size={20} />
      </Char>
    </>
  );
};

export default NextYear;
