import styled from "styled-components";

function FeedCardQuestion({ createdAt, content }) {
  return (
    <QuestionContainer>
      <QuestionTitle>질문 · {createdAt}</QuestionTitle>
      <QuestionDescription>{content}</QuestionDescription>
    </QuestionContainer>
  );
}

export default FeedCardQuestion;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  flex: 1 0 0;
  width: 100%;
`;

const QuestionTitle = styled.div`
  font-size: 1.4rem;
  line-height: 128.571%;
  color: var(--Grayscale-40, #818181);
`;

const QuestionDescription = styled.div`
  width: 100%;
  word-wrap: break-word;
  font-size: 1.6rem;
  line-height: 133.333%;
  color: ${(props) => props.theme.colors.colorMainFont};

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;
