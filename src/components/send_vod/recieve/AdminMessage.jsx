import avatar from "../../../assets/images/profile/slide.png";
import download from "../../../assets/images/reports/download.png"; // Ensure to import download icon
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  span {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
  }
  a {
    color: #0066ff;
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
  }
`;

const Text = styled.div`
  background-color: #1a1a18;
  padding: 12px;
  border-radius: 10px;
  span {
    color: #dedee9;
    font-size: 16px;
    font-weight: 400;
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

const FilesContainer = styled.div`
  background-color: #1a1a18;
  padding: 12px;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: auto;
  width: fit-content;
  h4 {
    color: #a0a0ab;
    font-size: 16px;
    font-weight: 400;
    width: fit-content;
    margin-right: auto;
    margin-top: 10px;
  }
`;

const Files = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
`;

const FileItem = styled.div`
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

const Download = styled.img`
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  gap: 12px;
  width: 80%;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  direction: rtl;
`;

const AdminMessage = ({ reply }) => {
  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <Content>
        <Header>
          <span>محمد امینی</span>
          <a href="https://rgb.irpsc.com/fa/citizen/hm-2000001">HM-200020</a>
        </Header>
        <Text>
          <span>{reply.message}</span>
          <h4>۲۱ اردیبهشت ۱۴۰۳ | ۱۲:۲۰</h4>
        </Text>

        {reply.files.length > 0 && (
          <FilesContainer>
            <Files>
              {reply.files.map((file, index) => (
                <FileItem key={index}>
                  {file.url && file.url.startsWith("blob:") ? (
                    <img src={file.url} alt={file.name} />
                  ) : (
                    <span>{file.name}</span>
                  )}
                  <Download
                    src={download}
                    alt="download"
                    onClick={() => handleDownload(file.url, file.name)}
                  />
                </FileItem>
              ))}
            </Files>
            <h4>۲۱ اردیبهشت ۱۴۰۳ | ۱۲:۲۰</h4>
          </FilesContainer>
        )}
      </Content>
      <img
        style={{ borderRadius: "100%" }}
        src={avatar}
        alt="avatar"
        width={50}
        height={50}
      />
    </Container>
  );
};

export default AdminMessage;
