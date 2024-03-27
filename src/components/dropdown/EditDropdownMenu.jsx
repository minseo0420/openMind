import styled from "styled-components";

import { ReactComponent as DeleteIcon } from "../../assets/svg/icons/close.svg";
import { ReactComponent as EditIcon } from "../../assets/svg/icons/edit.svg";

function EditDropdownMenu({ className, onEditClick, onDeleteClick }) {
  const handleEditClick = () => {
    onEditClick();
  };

  const handleDeleteClick = () => {
    onDeleteClick();
  };

  return (
    <Container className={className}>
      <Wrapper onClick={handleEditClick}>
        <IconEdit alt="수정하기 아이콘" />
        <Title>수정하기</Title>
      </Wrapper>
      <Wrapper onClick={handleDeleteClick}>
        <IconDelete alt="삭제하기 아이콘" />
        <Title>삭제하기</Title>
      </Wrapper>
    </Container>
  );
}

export default EditDropdownMenu;

const Container = styled.div`
  display: flex;
  width: 10.3rem;
  box-sizing: content-box;
  padding: 0.4rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.1rem solid ${(props) => props.theme.colors.colorGray_40};
  background: ${(props) => props.theme.colors.colorModal};
  box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(140, 140, 140, 0.25);
`;

const Title = styled.span`
  color: ${(props) => props.theme.colors.colorMainFont};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem;
`;

const Wrapper = styled.button`
  display: flex;
  padding: 0.6rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
  background: ${(props) => props.theme.colors.colorModal};
  border: none;
  &:hover {
    svg {
      filter: invert(30%) sepia(87%) saturate(2359%) hue-rotate(204deg) brightness(100%)
        contrast(90%);
      transition: 0.5s;
    }

    ${Title} {
      color: #1877f2;
      transition: 0.5s;
    }
  }
`;

const IconEdit = styled(EditIcon)`
  filter: ${(props) =>
    props.theme.mode.now === "dark"
      ? "invert(100%) sepia(100%) saturate(22%) hue-rotate(318deg) brightness(104%) contrast(107%)"
      : "none"};
`;

const IconDelete = styled(DeleteIcon)`
  filter: ${(props) =>
    props.theme.mode.now === "dark"
      ? "invert(100%) sepia(100%) saturate(22%) hue-rotate(318deg) brightness(104%) contrast(107%)"
      : "none"};
`;
