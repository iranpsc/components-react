import avatar from "../../assets/images/profile/slide.png";
import download from "../../assets/images/reports/download.png";
import file from "../../assets/images/reports/file.png";
import photo from "../../assets/images/reports/photo.jpeg";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  h2 {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    color: #dedee9;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Files = styled.div`
  border: 1px solid #454545;
  padding: 12px;
  border-radius: 10px;
  margin-top: 10px;
  div {
    display: flex;
    gap: 12px;
    margin-top: 10px;
  }

  h4 {
    color: #a0a0ab;
    font-size: 16px;
    font-weight: 400;
    width: fit-content;
    margin-right: auto;
    margin-top: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  margin-left: auto;
  direction: rtl;
  margin-top: 20px;
`;

const Download = styled.img`
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const Image = styled.div`
  position: relative;
  width: 192px;
  height: 171px;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
  border: 1px solid gray;
  img {
    &:first-of-type {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const handleDownload = (imageSrc, filename) => {
  const link = document.createElement("a");
  link.href = imageSrc;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const CitizenMessage = ({ isEditing, description }) => {
  return (
    <Container>
      <Content>
        <Files>
          <h2>متن یادداشت</h2>
          <p>{description}</p>
          <div>
            <Image>
              <img src={photo} alt="file" width={200} height={179} />
              <Download
                src={download}
                alt="download"
                width={36}
                height={36}
                onClick={() => handleDownload(photo, "photo.jpeg")}
              />
            </Image>
            <Image>
              <img src={file} alt="file" width={200} height={179} />
              <Download
                src={download}
                alt="download"
                width={36}
                height={36}
                onClick={() => handleDownload(file, "file.png")}
              />
            </Image>
          </div>
        </Files>
      </Content>
    </Container>
  );
};

export default CitizenMessage;
