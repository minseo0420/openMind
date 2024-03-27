import styled, { keyframes } from "styled-components";

function Skeleton() {
  return (
    <SkeletonDiv>
      <ProfileImg />
      <ProfileName />
      <QuestionDiv />
    </SkeletonDiv>
  );
}

export default Skeleton;

const fadeAnimation = keyframes`
  0% {
    background-color: #f0f0f0; // 시작 색상
  }
  50% {
    background-color: #a0a0a0; // 중간 색상
  }
  100% {
    background-color: #f0f0f0; // 끝 색상
  }
`;

const Animation = styled.div`
  animation: ${fadeAnimation} 2s infinite;
`;

const SkeletonDiv = styled.div`
  display: flex;
  width: 22rem;
  height: 18.7rem;
  padding: 2rem;
  flex-direction: column;
  border-radius: 1.6rem;
  border: 0.1rem solid var(--Grayscale-40, #818181);
  background: var(--Grayscale-10, #fff);
`;

const ProfileImg = styled(Animation)`
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
  border-radius: 6rem;
`;

const ProfileName = styled(Animation)`
  width: 100%;
  height: 3rem;
  margin: 1.2rem 0 2.2rem 0;
  border-radius: 1.6rem;
`;

const QuestionDiv = styled(Animation)`
  width: 100%;
  height: 2rem;
  border-radius: 1.6rem;
`;
