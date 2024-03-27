import { styled } from "styled-components";

//일단 다른 컴포넌트에서 해당 게시글에 대한 답변이 되었다면
//isAnswered를 true로 아니면 false로 전달하면 될것 같습니다.

function AnswerButton({ isAnswered }) {
  return <StyledButton isAnswered={isAnswered}>{isAnswered ? "답변 완료" : "미답변"}</StyledButton>;
}

export default AnswerButton;

const StyledButton = styled.button`
  display: inline-flex;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  background: ${(props) => props.theme.colors.colorBadge};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem; /* 128.571% */
  border: ${({ isAnswered, theme }) =>
    isAnswered
      ? `.1rem solid ${theme.colors.colorMainFont}`
      : ".1rem solid var(--Grayscale-40, #818181)"};
  color: ${({ isAnswered, theme }) =>
    isAnswered ? theme.colors.colorMainFont : theme.colors.colorMainFont};
  cursor: auto;
`;
