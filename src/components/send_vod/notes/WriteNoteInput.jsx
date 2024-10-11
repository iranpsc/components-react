import "react-quill/dist/quill.snow.css";

import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";
import { convertToPersian } from "../../../lib/convertToPersian";
import styled from "styled-components";

const EditorContainer = styled.div`
  background-color: #2c2c2c;
  border-radius: 5px;
  overflow: hidden;
  color: white;
  direction: rtl;
  margin: 10px auto;
  height: 212px;

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

const WriteNoteInput = ({ description, onChange }) => {
  const charLimit = 2000;
  const currentLength = description.length;
  const remainingChars = charLimit - currentLength;
  const isOverLimit = remainingChars <= 0;

  const handleKeyDown = (event) => {
    if (currentLength >= charLimit && event.key !== "Backspace" && event.key !== "Delete") {
      event.preventDefault();
    }
  };

  const handleChange = (value) => {
    // Allow updating the content
    if (value.length <= charLimit) {
      onChange(value);
    }
  };

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
      <Label>یادداشت خود را بنویسید</Label>
      <EditorContainer>
        <ReactQuill
          value={description}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          onKeyDown={handleKeyDown}
          // placeholder="یادداشت خود را بنویسید"
        />
      </EditorContainer>
      <Char isOverLimit={isOverLimit}>
        <span>{convertToPersian(remainingChars)} کاراکتر</span>
        <CiEdit size={20} />
      </Char>
    </>
  );
};

export default WriteNoteInput;
