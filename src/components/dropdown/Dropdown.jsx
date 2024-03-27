import { useState } from "react";
import styled from "styled-components";

import { ReactComponent as ArrowDownIcon } from "../../assets/svg/icons/arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "../../assets/svg/icons/arrow-up.svg";

//import "./Dropdown.css";

function Dropdown({ onSelect }) {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState("최신순");

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); //화면상 보여지는 함수
    onSelect(option); // 선택된 옵션을 부모 컴포넌트로 전달
    setIsOpened(false);
  };

  if (isOpened) {
    return (
      <Container>
        <Title>{selectedOption}</Title>
        <StyledArrowUpIcon onClick={handleClick} alt="접기" />
        <DropdownMenuContainer>
          <DropdownMenu onClick={() => handleOptionClick("이름순")}>
            <Title>이름순</Title>
          </DropdownMenu>
          <DropdownMenu onClick={() => handleOptionClick("최신순")}>
            <Title>최신순</Title>
          </DropdownMenu>
        </DropdownMenuContainer>
      </Container>
    ); // 추후에 메뉴는 props, map의 조합으로 작성할 예정입니다.
  }

  return (
    <Container>
      <Title>{selectedOption}</Title>
      <StyledArrowDownIcon onClick={handleClick} alt="펼치기" />
    </Container>
  );
}

export default Dropdown;

const Container = styled.div`
  display: flex;
  padding: 0.8rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  //align-self: stretch;
  border-radius: 0.8rem;
  border: 0.1rem solid ${(props) => props.theme.colors.colorBorder};
  background: ${(props) => props.theme.colors.colorBg};
  position: relative;
`;

const Title = styled.span`
  color: ${(props) => props.theme.colors.colorMainFont};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
`;

const DropdownMenuContainer = styled.div`
  display: flex;
  width: 7.9rem;
  padding: 0.4rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 0.8rem;
  border: 0.1rem solid var(--Grayscale-30, #cfcfcf);
  background: ${(props) => props.theme.colors.colorBg};

  /* 1pt */
  box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(140, 140, 140, 0.25);

  position: absolute;
  bottom: -7.2rem;
`;

const DropdownMenu = styled.div`
  display: flex;
  padding: 0.6rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
  &:hover {
    ${Title} {
      cursor: pointer;
      color: #1877f2;
      transition: 0.5s;
    }
  }
`;

const StyledArrowDownIcon = styled(ArrowDownIcon)`
  cursor: pointer;
  filter: ${(props) =>
    props.theme.mode.now === "dark"
      ? "invert(100%) sepia(100%) saturate(22%) hue-rotate(318deg) brightness(104%) contrast(107%)"
      : "none"};
`;

const StyledArrowUpIcon = styled(ArrowUpIcon)`
  cursor: pointer;
  filter: ${(props) =>
    props.theme.mode.now === "dark"
      ? "invert(100%) sepia(100%) saturate(22%) hue-rotate(318deg) brightness(104%) contrast(107%)"
      : "none"};
`;
