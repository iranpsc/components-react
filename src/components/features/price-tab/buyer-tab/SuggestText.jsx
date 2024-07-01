import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnUnderline,
  BtnUndo,
  Editor,
  EditorProvider,
  HtmlButton,
  Separator,
  Toolbar,
  createButton,
} from "react-simple-wysiwyg";

import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  border-radius: 5px;
  border: 1px solid #454545;
  color: #ffffff;
  background-color: #2c2c2c;
  overflow: hidden;
  height: 250px !important;
`;
const SuggestText = () => {
  const [value, setValue] = useState("simple text");

  function onChange(e) {
    setValue(e.target.value);
  }
  const BtnAlignCenter = createButton("Align center", "≡", "justifyCenter");
  return (
    <Wrapper>
      <EditorProvider>
        <Editor
          style={{ border: "1px solid #454545", backgroundColor: "#2C2C2C" }}
          value={value}
          onChange={onChange}
        >
          <Toolbar style={{ backgroundColor: "transparent" }}>
            <BtnUndo />
            <BtnRedo />
            <Separator />
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
            <BtnClearFormatting />
            <HtmlButton />
            <Separator />
            <BtnAlignCenter />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </Wrapper>
  );
};

export default SuggestText;
