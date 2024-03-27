import { Link } from "react-router-dom";
import styled from "styled-components";
import mainImg from "../assets/svg/header.svg";
import { ReactComponent as Logo } from "../assets/svg/icons/logo.svg";
import Button from "../components/buttons/ArrowIconButton.jsx";
import Stack from "../components/common/Stack";
import CreateQuestionCard from "../domain/CreateQuestionCard";

function Main() {
  return (
    <>
      <Container gap={24}>
        <Link to="/">
          <MainLogo />
        </Link>
        <Link to="/list">
          <GoToASK variant="outline" hasIcon>
            질문하러 가기
          </GoToASK>
        </Link>
        <CreateQuestionCard />
      </Container>
      <ImgContainer>
        <MainImg src={mainImg} />
      </ImgContainer>
    </>
  );
}

export default Main;

const Container = styled(Stack)`
  margin-top: 8rem;

  @media (min-width: 768px) {
    position: static;
    margin-top: 16rem;
  }
`;

const MainLogo = styled(Logo)`
  width: 24.8rem;
  height: 9.8rem;
  filter: ${(props) =>
    props.theme.mode.now === "dark"
      ? "invert(100%) sepia(100%) saturate(22%) hue-rotate(318deg) brightness(104%) contrast(107%)"
      : "none"};

  @media (min-width: 768px) {
    width: 45.6rem;
    height: 18rem;
  }
`;

const GoToASK = styled(Button)`
  @media (min-width: 768px) {
    position: absolute;
    top: 4.4rem;
    right: 5rem;
  }
  @media (min-width: 1200px) {
    right: 13rem;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 35rem;
  transform: scale(1.2);
  overflow: hidden;
  z-index: -1;
  filter: ${(props) =>
    props.theme.mode.now === "dark"
      ? "invert(100%) sepia(100%) saturate(22%) hue-rotate(318deg) brightness(104%) contrast(107%)"
      : "none"};

  @media (min-width: 768px) {
    top: 38rem;
    transform: scale(1);
  }
  @media (min-width: 1200px) {
    top: 5rem;
  }
`;

const MainImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
