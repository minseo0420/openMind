import { useQueryClient } from '@tanstack/react-query';
import styled, { css } from "styled-components";

import { ReactComponent as hateIcon } from "../../assets/svg/icons/thumbs-down.svg";
import { useReactionsMutation } from "../../hooks/api/useMutationWithAxios";
import { useGetQuestionQuery } from "../../hooks/api/useQueryWithAxios";

const REACTION_TYPE = "dislike";

function DisLike({ questionId }) {
  let dataInLocalStorage = JSON.parse(localStorage.getItem(`${questionId}_${REACTION_TYPE}`));

  const queryClient = useQueryClient();
  const {isSuccess, data} = useGetQuestionQuery(questionId);
  const {isSuccess: isPostSuccess, mutateAsync} = useReactionsMutation(questionId, REACTION_TYPE, queryClient);

  const handleClick = async () => {
    if (dataInLocalStorage) {
      return;
    }

    try {
      await mutateAsync(questionId, REACTION_TYPE);

    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  if(isPostSuccess) {
    localStorage.setItem(`${questionId}_${REACTION_TYPE}`, isPostSuccess);
  }

  return (
    <Button $isClicked={dataInLocalStorage} onClick={handleClick}>
      <ThumbsDown />
      {isSuccess ? <ButtonText>싫어요 {data.dislike}</ButtonText> : <ButtonText>싫어요</ButtonText>}
    </Button>
  );
}

export default DisLike;

const ButtonText = styled.span`
  color: var(--Grayscale-40, #818181);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2rem;
`;

const ThumbsDown = styled(hateIcon)`
  filter: invert(54%) sepia(0%) saturate(9%) hue-rotate(156deg) brightness(93%) contrast(82%);
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border: none;
  background-color: ${(props) => props.theme.colors.colorFeedCard};
  ${(props) =>
    props.$isClicked &&
    css`
      ${ButtonText} {
        color: #000000;
      }

      ${ThumbsDown} {
        filter: invert(0%) sepia(100%) saturate(7500%) hue-rotate(61deg) brightness(106%)
          contrast(109%);
      }
    `}
`;
