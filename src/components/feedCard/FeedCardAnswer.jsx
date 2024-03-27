import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import axios from "../../apis/axios";
import requests from "../../apis/request";
import { calculateDateDifference } from "../../utils/dateCalculate";
import Button from "../buttons/Button";
import InputTextArea from "../input/InputTextArea";

function FeedCardAnswer({
  questionId,
  subjectId,
  answer,
  isClickEdit,
  isClickDelete,
  toggleIsPost,
  toggleIsEdit,
  toggleIsDelete,
  hasAnswerCondition,
}) {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState({});
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [state, setState] = useState("Empty");
  const [answerId, setAnswerId] = useState("");

  // InputTextArea value값 추적
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // 유저 데이터 받아오기
  const fetchData = useCallback(async () => {
    if (subjectId) {
      try {
        const response = await axios.get(`${requests.SUBJECTS}${subjectId}/`);
        const data = response.data;
        setUser(data);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    }
  }, [subjectId]);

  // 답변하기
  const handleClickPost = useCallback(async () => {
    if (inputValue.trim() != "") {
      try {
        const response = await axios.post(`${requests.QUESTIONS}${questionId}/answers/`, {
          questionId: 0,
          content: inputValue,
          isRejected: true,
          team: "string",
        });
        toggleIsPost();
        setAnswerId(response.data.id);
        setContent(inputValue);
        setState("Sent");
      } catch (error) {
        console.error("에러 발생:", error);
      }
    }
  });

  // 답변 수정하기
  const handleClickEdit = useCallback(async () => {
    if (subjectId) {
      try {
        await axios.patch(`${requests.ANSWERS}${answerId}/`, {
          content: content,
          isRejected: true,
        });
        toggleIsEdit();
      } catch (error) {
        console.error("에러 발생:", error);
      }
    }
  });

  // 시작하고 최초에 실행됨
  useEffect(() => {
    fetchData();
    if (answer) {
      setAnswerId(answer.id);
      setContent(answer.content);
      setCreatedAt(answer.createdAt);
    }
  }, []);

  // 삭제되었다면 InputTextArea 보여주게
  useEffect(() => {
    if (isClickDelete) {
      try {
        axios.delete(`${requests.ANSWERS}${answerId}/`);
      } catch (error) {
        console.error("에러 발생:", error);
      }
      setState("Empty");
      setCreatedAt("");
      setInputValue("");
      toggleIsDelete();
    }
  }, [isClickDelete]);

  useEffect(() => {
    setState(answer !== null ? "Sent" : "Empty");
  }, [answer]);

  return (
    <CardAnswerContainer>
      <ProfileImage src={user.imageSource} />
      <AnswerContainer>
        <AnswerTop>
          <AnswerName>{user.name}</AnswerName>
          {createdAt && <AnswerDate>{calculateDateDifference(createdAt)}</AnswerDate>}
        </AnswerTop>
        {state === "Empty" && hasAnswerCondition ? (
          <>
            <InputArea
              placeholder="답변을 입력해주세요"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Button variant="fill" disabled={inputValue.trim() === ""} onClick={handleClickPost}>
              답변달기
            </Button>
          </>
        ) : state === "Sent" ? (
          isClickEdit ? (
            <>
              <InputArea value={content} onChange={(e) => setContent(e.target.value)} />
              <Button variant="fill" disabled={content.trim() === ""} onClick={handleClickEdit}>
                수정하기
              </Button>
            </>
          ) : (
            <AnswerDescription>{content}</AnswerDescription>
          )
        ) : state === "Resection" ? (
          <AnswerResection>답변 거절</AnswerResection>
        ) : null}
      </AnswerContainer>
    </CardAnswerContainer>
  );
}

export default FeedCardAnswer;

const CardAnswerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 10rem;

  @media (min-width: 768px) {
    width: 4.8rem;
    height: 4.8rem;
  }
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
`;

const AnswerTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
`;

const AnswerName = styled.div`
  color: var(--Grayscale-60);
  font-size: 1.4rem;
  line-height: 133.333%;
  color: ${(props) => props.theme.colors.colorMainFont};

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const InputArea = styled(InputTextArea)`
  width: 100%;
`;

const AnswerDate = styled.div`
  font-size: 1.4rem;
  line-height: 128.571%;
  color: ${(props) => props.theme.colors.colorMainFont};
`;

const AnswerDescription = styled.div`
  font-size: 1.6rem;
  line-height: 137.5%;
  color: ${(props) => props.theme.colors.colorMainFont};
`;

const AnswerResection = styled.div`
  color: var(--Red-50);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 137.5%;
`;
