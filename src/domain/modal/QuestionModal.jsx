import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";

import ModalBackground from "./ModalBackground";

import close from "../../assets/svg/icons/close.svg";
import messages from "../../assets/svg/icons/messages.svg";
import Button from "../../components/buttons/Button";
import InputTextArea from "../../components/input/InputTextArea";
import { useQuestionsMutation } from "../../hooks/api/useMutationWithAxios";

function QuestionModal({ onClose, id, userName, imageSource }) {
  const [inputValue, setInputValue] = useState("");
  const queryClient = useQueryClient();
  const { mutateAsync } = useQuestionsMutation(id, inputValue, queryClient);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = async () => {
    try {
      await mutateAsync(id, inputValue, {
        onSuccess: () => {},
      });

      onClose();
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  return (
    <ModalBackground onClick={onClose}>
      <ModalTop>
        <Title>
          <MessageIcon src={messages} />
          질문을 작성하세요
        </Title>
        <CloseIcon src={close} onClick={onClose} />
      </ModalTop>
      <ModalContents>
        <Profile>
          To.
          <ProfileImg src={imageSource} />
          {userName}
        </Profile>
        <ModalInputTextArea
          placeholder="질문을 입력해주세요"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button variant="fill" disabled={inputValue.trim() === ""} onClick={handleClick}>
          질문 보내기
        </Button>
      </ModalContents>
    </ModalBackground>
  );
}

export default QuestionModal;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  gap: 0.8rem;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  color: ${(props) => props.theme.colors.colorMainFont};

  @media screen and (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

const CloseIcon = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;
  filter: ${(props) =>
    props.theme.mode.now === "dark"
      ? "invert(100%) sepia(100%) saturate(22%) hue-rotate(318deg) brightness(104%) contrast(107%)"
      : "none"};

  @media screen and (min-width: 768px) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

const MessageIcon = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  filter: ${(props) =>
    props.theme.mode.now === "dark"
      ? "invert(100%) sepia(100%) saturate(22%) hue-rotate(318deg) brightness(104%) contrast(107%)"
      : "none"};

  @media screen and (min-width: 768px) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
`;

const Profile = styled.div`
  display: flex;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 133%;
  align-items: center;
  color: ${(props) => props.theme.colors.colorMainFont};
`;

const ProfileImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  margin: 0 0.4rem 0 0.4rem;
  border-radius: 10rem;
`;

const ModalInputTextArea = styled(InputTextArea)`
  height: 35.8rem;

  @media screen and (min-width: 768px) {
    height: 18rem;
  }
`;
