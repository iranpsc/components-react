import styled from "styled-components";
import video from "../../assets/images/education/education.mp4";

const Container = styled.div`
  height: 217px;
  border-radius: 10px;
  background-color: #383835;
  margin-top: 30px;
`;
const Video = () => {
  return (
    <Container>
      <video
        width={450}
        height={217}
        alt="education"
        style={{
          borderRadius: "10px",
          cursor: "pointer",
          objectFit: "cover",
          height: "100%",
          width: "100%",
        }}
        controls
      >
        <source  src={video} type="video/mp4" />{" "}
      </video>
    </Container>
  );
};

export default Video;
