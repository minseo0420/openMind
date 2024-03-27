import { useQueryClient } from '@tanstack/react-query';
import styled, { css } from "styled-components";

import { ReactComponent as likeIcon } from "../../assets/svg/icons/thumbs-up.svg";
import { useReactionsMutation } from "../../hooks/api/useMutationWithAxios";
import { useGetQuestionQuery } from "../../hooks/api/useQueryWithAxios";

const REACTION_TYPE = "like";

function Like({ questionId }) {
  let dataInLocalStorage = JSON.parse(localStorage.getItem(questionId));

  // server state
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
    localStorage.setItem(questionId, isPostSuccess);
  }

  return (
    <Button type="button" $isClicked={dataInLocalStorage} onClick={handleClick}>
      <ThumbsUp />
      {isSuccess ? <ButtonText>좋아요 {data.like}</ButtonText> : <ButtonText>좋아요</ButtonText>}
    </Button>
  );
}

export default Like;

const ButtonText = styled.span`
  color: var(--Grayscale-40, #818181);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2rem;
`;

const ThumbsUp = styled(likeIcon)`
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
        color: #1877f2;
      }

      ${ThumbsUp} {
        filter: invert(48%) sepia(83%) saturate(6141%) hue-rotate(207deg) brightness(101%)
          contrast(90%);
      }
    `}
`;
