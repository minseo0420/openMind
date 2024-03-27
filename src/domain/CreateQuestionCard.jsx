import { useState, useCallback } from "react";
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";

import Button from "../components/buttons/ArrowIconButton";
import ErrorMessage from "../components/error/ErrorMessage";
import MainForm from "../components/input/Form";
import InputField from "../components/input/InputField";

import ERROR_MESSAGE from "../components/constants/message";
import { useSubjectsMutation } from "../hooks/api/useMutationWithAxios";
import { useInfiniteSubjectsQuery } from "../hooks/api/useQueryWithAxios";
import { useGetAllData } from "../hooks/useGetAllData";
import validateInput from "../utils/validate/validateInput";

const OFFSET = 8;

function CreateQuestionCard() {
  const navigate = useNavigate();
  const [answerer, setAnswerer] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //server state
  const {data, fetchNextPage} = useInfiniteSubjectsQuery({limit: OFFSET});
  useGetAllData({data, callback: fetchNextPage});
  const queryClient = useQueryClient();
  const {data:newData, isSuccess, mutateAsync} = useSubjectsMutation(answerer, queryClient);

  const handleChange = (e) => {
    setAnswerer(e.target.value);
    setErrorMessage("");
  };

  const handleClick = useCallback(async (e) => {
    e.preventDefault();

    try {
      const validate = validateInput(answerer);
      if (validate) {
        setErrorMessage(validate);
        return;
      } // 유효값 검사

      const nicknameList = data.results.map((result) => result.name);
      if (nicknameList.includes(answerer)) {
        setErrorMessage(ERROR_MESSAGE.NAME_ALREADY_IN_USE);
        return;
      } // 중복 검사

      await mutateAsync(answerer); // 뮤테이션

    } catch (error) {
      console.error("에러 발생:", error);
    }
  }, [answerer]);

  if (isSuccess) { // 뮤테이션으로 최신화 -> isSuccess
    const { id } = newData;

    localStorage.setItem(answerer, id);
    navigate(`/post/${id}/answer`);
  }

  return (
    <MainForm>
      <InputField placeholder="이름을 입력하세요" onChange={handleChange} hasError={errorMessage} />
      {errorMessage && <ErrorMessage error={errorMessage} />}

      <Button variant="fill" onClick={handleClick}>
        질문 받기
      </Button>
    </MainForm>
  );
}

export default CreateQuestionCard;
