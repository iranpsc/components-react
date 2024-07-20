import Question from "./Question";
import Title from "../../Title";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  direction: rtl;
`;
const Content = ({
  question,
  showAnswer,
  setShowAnswer,
  setTimer,
  setFirstPage,
  setFooters,
  footers,
}) => {
  return (
    <Container>
      <Title right title={question.title} />
      <Wrapper>
        {question.options.map((item) => (
          <Question
            key={item.id}
            {...item}
            setShowAnswer={setShowAnswer}
            showAnswer={showAnswer}
            setTimer={setTimer}
            setFirstPage={setFirstPage}
            setFooters={setFooters}
            footers={footers}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Content;
