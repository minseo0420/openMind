import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ModalBackground from "./ModalBackground";
import close from "../../assets/svg/icons/close.svg";
import Button from "../../components/buttons/Button";
import ErrorMessage from "../../components/error/ErrorMessage";
import InputField from "../../components/input/InputField";
import ERROR_MESSAGE from "../../components/constants/message";

function AnswerModal({ onClose }) {
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setErrorMsg("");
  };

  //답변하러 가기 버튼을 클릭했을 때 나오는 실행되는 함수
  const handlePageChange = () => {
    const postId = localStorage.getItem(inputValue);
    if (postId) {
      navigate(`/post/${postId}/answer`);
    } else {
      setErrorMsg(ERROR_MESSAGE.NO_ID);
    }
  };

  const handleModalClick = (event) => {
    event.stopPropagation(); // 클릭 이벤트의 배경으로의 전파 방지
  };

  return (
    <AnswerModalBackground onClick={onClose} className={AnswerModalBackground}>
      <ModalTop onClick={handleModalClick}>
        <Title>계정이 있으신가요? </Title>
        <CloseIcon src={close} onClick={onClose} />
      </ModalTop>
      <ModalBottom>
        <InputField
          placeholder="닉네임을 입력하세요"
          onChange={handleInputChange}
          hasError={errorMsg}
        ></InputField>
        {errorMsg && <ErrorMessage error={errorMsg} />}
        <Button
          variant="fill"
          disabled={inputValue.trim() === ""}
          onClick={handlePageChange}
        >
          답변하러 가기
        </Button>
      </ModalBottom>
    </AnswerModalBackground>
  );
}

export default AnswerModal;

const AnswerModalBackground = styled(ModalBackground)`
  height: 24rem;
  @media screen and (min-width: 768px) {
    height: 26rem;
  }
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
