import styled from "styled-components";

function ModalBackground({ onClick, children, className }) {
  return (
    <Background onClick={onClick}>
      <ModalContainer onClick={(e) => e.stopPropagation()} className={className}>
        {children}
      </ModalContainer>
    </Background>
  );
}

export default ModalBackground;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: var(--Dim, rgba(0, 0, 0, 0.56));
  top: 0;
  left: 0;
  z-index: 100;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32.7rem;
  height: 56.8rem;
  padding: 4rem;
  flex-shrink: 0;
  border-radius: 2.4rem;
  background: ${(props) => props.theme.colors.colorModal};
  box-shadow: 0rem 1.6rem 2rem 0rem rgba(48, 48, 48, 0.62);
  cursor: default;
  display: flex;
  flex-direction: column;
  gap: 3.4rem;

  @media screen and (min-width: 768px) {
    width: 61.2rem;
    height: 45.4rem;
  }
`;
