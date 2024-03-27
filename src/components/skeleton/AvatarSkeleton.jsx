import styled from "styled-components";

function AvatarSkeleton () {
  return (
    <ProfileImg />
  )
}

export default AvatarSkeleton

const ProfileImg = styled.div`
  background-color: gray;
  border-radius: 10rem;
  width: 10.4rem;
  height: 10.4rem;

  @media (min-width: 768px) {
    width: 13.6rem;
    height: 13.6rem;
  }
`;