import { styled } from "styled-components";
import messageIcon from "../../assets/svg/icons/messages.svg";
import { BoxShadow2 } from "../../style/button";

function UserCard({ profileImg, profileName, questionCount }) {
  return (
    <CardContainer>
      <ProfileContainer>
        <ProfileImg src={profileImg} alt="프로필 사진" />
        <ProfileName>{profileName}</ProfileName>
      </ProfileContainer>
      <QuestionContainer>
        <QuestionDiv>
          <MessageIcon src={messageIcon} alt="메시지 아이콘" />
          <QuestionReceived>받은 질문</QuestionReceived>
        </QuestionDiv>
        <QuestionCount>{questionCount}개</QuestionCount>
      </QuestionContainer>
    </CardContainer>
  );
}

export default UserCard;

const CardContainer = styled.div`
  display: flex;
  height: 18.7rem;
  padding: 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 1.6rem;
  border: 0.1rem solid ${(props) => props.theme.colors.colorGray_40};
  background: ${(props) => props.theme.colors.colorCard};

  &:hover {
    ${BoxShadow2};
    transform: translate(0rem, -10%);
    transition: 0.3s;
  }

  @media (max-width: 1199px) and (min-width: 769px) {
    min-width: 18.6rem;
  }

  @media (max-width: 768px) {
    padding: 1.6rem;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  align-self: stretch;
`;

const ProfileImg = styled.img`
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
  border-radius: 6rem;
  background: lightgray 50% / cover no-repeat, #d9d9d9;

  @media (max-width: 768px) {
    width: 4.8rem;
    height: 4.8rem;
  }
`;

const ProfileName = styled.p`
  align-self: stretch;
  color: ${(props) => props.theme.colors.colorMainFont};
  font-feature-settings: "clig" off, "liga" off;
  font-family: Actor;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem; /* 125% */

  @media (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  height: 2.2rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

const QuestionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const MessageIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  filter: ${(props) =>
    props.theme.mode.now === "dark"
      ? "invert(100%) sepia(100%) saturate(22%) hue-rotate(318deg) brightness(104%) contrast(107%)"
      : "none"};
`;

const QuestionReceived = styled.p`
  color: ${(props) => props.theme.colors.colorGray_40};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem; /* 137.5% */
`;

const QuestionCount = styled.span`
  color: ${(props) => props.theme.colors.colorGray_40};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem; /* 137.5% */
`;
