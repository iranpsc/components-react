import { useEffect, useState } from "react";

import Title from "../../Title";
import remove from "../../../assets/images/reports/remove.png";
import styled from "styled-components";

const Files = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Container = styled.div`
  margin-top: 10px;
  direction: rtl;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  justify-content: center;
  gap: 10px;
  border: 1px dashed #454545;
  width: 220px;
  height: 140px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  span {
    color: #a0a0ab;
    font-size: 60px;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const FilePreview = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  margin-right: 10px;
  border-radius: 10px;
`;

const FileImage = styled.img`
  width: 220px;
  height: 140px;
  border: 1px solid #454545;
  border-radius: 10px;
  object-fit: contain;
  position: relative;
  margin-bottom: 5px;
`;

const RemoveButton = styled.img`
  border: none;
  color: white;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
  position: absolute;
  left: 5px;
  bottom: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin: 10px 0;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 15px 0;
`;

const SendNote = ({ files, setFiles }) => {
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    const filePreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews(filePreviews);

    return () => {
      filePreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  const handleDivClick = () => {
    document.getElementById("file-input").click();
  };

  const fileHandler = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles([...files, ...newFiles]); 
  };

  const handleRemove = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  return (
    <Container>
      <Title title='ضمینه یادداشت'/>
      <Wrapper>
        <Div onClick={handleDivClick}>
          <span>+</span>
          <HiddenInput
            id="file-input"
            type="file"
            accept="image/*,video/*,.pdf"
            multiple
            onChange={fileHandler}
          />
        </Div>
        <Files>
          {previews.map((preview, index) => (
            <FilePreview key={index}>
              <FileImage src={preview} />
              <RemoveButton src={remove} onClick={() => handleRemove(index)} />
            </FilePreview>
          ))}
        </Files>
      </Wrapper>
    </Container>
  );
};


export default SendNote;
