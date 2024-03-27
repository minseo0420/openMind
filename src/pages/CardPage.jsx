import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as LogoIcon } from "../assets/svg/icons/logo.svg";

import FloatingButton from "../components/buttons/FloatingButton";
import ShareButton from "../components/buttons/ShareButton";
import AvatarSkeleton from "../components/skeleton/AvatarSkeleton";
import FeedCardContainer from "../domain/FeedCardContainer";
import QuestionModal from "../domain/modal/QuestionModal";
import { useSubjectQuery } from "../hooks/api/useQueryWithAxios";
import { useMediaQueryForMobile } from "../hooks/useMediaQueryForMobile";

function CardPage() {
  const { id } = useParams();
  const isMobile = useMediaQueryForMobile();
  const [isOpenModal, setIsOpenModal] = useState(false);

  // server state
  const { isSuccess, isLoading, data } = useSubjectQuery(id);

  const handleClick = () => {
    setIsOpenModal((isOpenModal) => !isOpenModal);
  };

  return (
    <Layout>
      <Link to="/">
        <SmallStyledLogo />
      </Link>
      {isLoading && <AvatarSkeleton />}
      {isSuccess && (
        <>
          <ProfileImg src={data.imageSource} />
          <NameTitle>{data.name}</NameTitle>
        </>
      )}
      <ShareButton />
      {isLoading && <FeedCardContainer id={id} />}
      {isSuccess && <FeedCardContainer id={id} userName={data.name} />}
      <FloatingButtonLayout>
        <FloatingButton isMobile={isMobile} onClick={handleClick}>
          {isMobile ? "질문 작성" : "질문 작성하기"}
        </FloatingButton>
      </FloatingButtonLayout>
      {isOpenModal && isSuccess && (
        <QuestionModal
          onClose={handleClick}
          id={id}
          userName={data.name}
          imageSource={data.imageSource}
        />
      )}
    </Layout>
  );
}

export default CardPage;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
`;

const SmallStyledLogo = styled(LogoIcon)`
  display: flex;
  width: 12.4rem;
  height: 4.9rem;
  margin-top: 4rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  filter: ${(props) =>
    props.theme.mode.now === "dark"
      ? "invert(100%) sepia(100%) saturate(22%) hue-rotate(318deg) brightness(104%) contrast(107%)"
      : "none"};

  @media (min-width: 768px) {
    width: 17rem;
    height: 6.7rem;
  }
`;

const FloatingButtonLayout = styled.div`
  position: fixed;
  bottom: 2.4rem;
  right: 2.4rem;
`;

const NameTitle = styled.span`
  color: ${(props) => props.theme.colors.colorMainFont};
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3rem;

  @media (min-width: 768px) {
    font-size: 3.2rem;
    line-height: 4rem;
  }
`;

const ProfileImg = styled.img`
  border-radius: 10rem;
  width: 10.4rem;
  height: 10.4rem;

  @media (min-width: 768px) {
    width: 13.6rem;
    height: 13.6rem;
  }
`;
