import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import axios from "../apis/axios";
import requests from "../apis/request";
import { ReactComponent as ArrowDoubleLeftIcon } from "../assets/svg/icons/arrow-double-left.svg";
import { ReactComponent as ArrowDoubleRightIcon } from "../assets/svg/icons/arrow-double-right.svg";
import { ReactComponent as ArrowLeftIcon } from "../assets/svg/icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/icons/arrow-right.svg";
import logo from "../assets/svg/icons/logo.svg";
import BaseButton from "../components/buttons/ArrowIconButton";
import Dropdown from "../components/dropdown/Dropdown";
import Pagination from "../components/pagination/Pagination";
import UserCard from "../components/userCard/UserCard";
import AnswerModal from "../domain/modal/AnswerModal";
// import { useInfiniteSubjectsQuery } from "../hooks/api/useQueryWithAxios";
// import { useGetAllData } from "../hooks/useGetAllData";

// const OFFSET = 8;

function ListPage() {
  // const {data, fetchNextPage} = useInfiniteSubjectsQuery({limit: OFFSET});
  // useGetAllData({data, callback: fetchNextPage});

  const [cardList, setCardList] = useState([]);
  const [cards, setCards] = useState(0); //총 카드 수 28개
  const [pages, setPages] = useState(0); //총 페이지 수
  const [startPage, setStartPage] = useState(1); //시작 페이지
  const [endPage, setEndPage] = useState(5); //끝 페이지 (수정 필요)
  const [clickedPage, setClickedPage] = useState(1); //누른 페이지 숫자
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(window.innerWidth < 1000 ? 6 : 8);
  const [sortUrl, setSortUrl] = useState("&sort=time");
  const [isModal, setIsModal] = useState(false);

  //오프셋 리미트를 위한 코드
  const offsetUrl = `?limit=${limit}&offset=${offset}`;

  useEffect(() => {
    async function getCardList() {
      try {
        const response = await axios.get(requests.SUBJECTS + offsetUrl + sortUrl);

        setCardList(response.data);
        setCards(Number(response.data.count));
        setPages(Math.ceil(response.data.count / limit)); // 총 페이지 수 계산
      } catch (error) {
        console.error("에러 발생:", error);
      }
    }

    getCardList();
  }, [offset, sortUrl, cards, limit]);

  useEffect(() => {
    function handleResize() {
      setLimit(window.innerWidth < 910 ? 6 : 8);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [limit]);

  useEffect(() => {
    // limit가 변경될 때마다 전체 페이지 수를 다시 계산
    const newPages = Math.ceil(cards / limit);
    setPages(newPages);

    // limit가 변경되었을 때, 페이지 번호 범위를 조정
    const currentPage = Math.min(clickedPage, newPages); // 현재 페이지 번호가 새로운 페이지 수를 초과하지 않도록 조정
    const newStartPage = Math.max(1, 5 * Math.floor((currentPage - 1) / 5) + 1); // 시작 페이지 번호는 현재 페이지를 기준으로 고정 범위 내에 위치하도록 설정
    const newEndPage = Math.min(newPages, newStartPage + 4); // 종료 페이지 번호는 시작 페이지로부터 4씩 증가한 값 중 새로운 페이지 수를 초과하지 않도록 설정

    // 설정한 페이지 번호로 업데이트
    setStartPage(newStartPage);
    setEndPage(newEndPage);
    setClickedPage(currentPage);
  }, [limit, cards, clickedPage]);

  //페이지네이션 랜더링 함수
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Pagination isSelected={i === clickedPage} onClick={() => handleClickPage(i)} key={i}>
          {i}
        </Pagination>
      );
    }
    return pageNumbers;
  };

  //이름순 최신순을 고르면 URL이 바뀌는 코드
  //option값을 조건을 주어 sortUrl변경
  const handleSortOption = (option) => {
    if (option == "이름순") {
      setSortUrl("&sort=name");
    } else {
      setSortUrl("&sort=time");
    }
  };

  //페이지 네이션의 각 페이지 숫자를 클릭하면 실행되는 함수
  const handleClickPage = (i) => {
    setOffset(limit * i - limit);
    setClickedPage(i);
  };

  //페이지 네이션의 왼쪽 화살표를 누르면 실행되는 함수
  // < 4 5 >에서 < 누르면  3으로 가도록
  const handleBeforePage = () => {
    if (startPage === 1) {
      return;
    }
    setStartPage(startPage - 5);
    setClickedPage(startPage - 1);
    setOffset(limit * (startPage - 1) - limit);
    setEndPage(startPage - 1);
  };

  //페이지 네이션의 오른쪽 화살표를 누르면 실행되는 함수
  // < 1 2 3 >에서 > 누르면 4로 가도록
  const handleAfterPage = () => {
    if (endPage === pages) {
      return;
    }
    setStartPage(startPage + 5);
    setClickedPage(startPage + 5);
    setOffset(limit * (startPage + 5) - limit);
    //이 케이스는 페이지네이션을 일정한 값을 더해가면서 넘기는데
    //기존의 총 페이지 수보다 클 경우를 대비
    if (endPage + 5 > pages) {
      setEndPage(pages);
    } else {
      setEndPage(endPage + 5);
    }
  };

  //페이지 네이션의 더블 왼쪽 화살표를 누르면 실행되는 함수
  //3이 n이 된다.
  const handleFarLeftPage = () => {
    if (startPage === 1) {
      return;
    }
    setStartPage(1);
    setClickedPage(1);
    setOffset(limit * 1 - limit);
    setEndPage(1 + 5 - 1);
  };

  //페이지 네이션의 더블 오른쪽 화살표를 누르면 실행되는 함수
  //3이 n이 된다.
  const handleFarRightPage = () => {
    if (endPage == pages) {
      return;
    }

    setEndPage(pages);
    setClickedPage(pages);
    setOffset(limit * pages - limit);

    if (pages % 5 === 0) {
      setStartPage(pages - 5 + 1);
    } else {
      setStartPage(pages - (pages % 5) + 1);
    }
  };

  //답변하러가기 클릭 시 실행되는 함수
  //로컬 스토리지에 한사람이 여러계정을 만들 수 있음.
  const handleAnswerClick = () => {
    setIsModal(!isModal);
  };

  return (
    <Container>
      <HeaderDiv>
        <Header>
          <Link to={`/`}>
            <Logo src={logo} alt="로고 이미지" />
          </Link>
          <BaseButton variant="outline" hasIcon onClick={handleAnswerClick}>
            답변하러가기
          </BaseButton>
        </Header>
      </HeaderDiv>
      <TitleDiv>
        <Title>누구에게 질문할까요?</Title>
        <Dropdown onSelect={handleSortOption} />
      </TitleDiv>
      {isModal && <AnswerModal onClose={handleAnswerClick} />}
      <CardListDiv>
        {cardList.results &&
          cardList.results.map((item) => (
            <>
              <Link to={`/post/${item.id}`}>
                <UserCard
                  key={item.id}
                  profileImg={item.imageSource}
                  profileName={item.name}
                  questionCount={item.questionCount}
                ></UserCard>
              </Link>
            </>
          ))}
      </CardListDiv>
      <PaginationDiv>
        <StyledDoubleArrowLeftIcon onClick={handleFarLeftPage} />
        <StyledArrowLeftIcon onClick={handleBeforePage} />
        {renderPageNumbers()}
        <StyledArrowRightIcon onClick={handleAfterPage} />
        <StyledDoubleArrowRightIcon onClick={handleFarRightPage} />
      </PaginationDiv>
    </Container>
  );
}

export default ListPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background: var(--Grayscale-20, #f9f9f9); */
  background: ${(props) => props.theme.colors.colorBg};

  @media (min-width: 1200px) {
    padding: 0 10rem; /* 좌우 여백 조절 */
  }
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  @media (max-width: 767px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2.4rem;
  }
`;

const CardListDiv = styled.div`
  width: 100%;
  display: grid;
  place-content: center;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(4, 22rem);
  gap: 2rem;
  margin-top: 3rem;
  @media (max-width: 1199px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0 3.2rem; /* 좌우 여백 조절 */
  }

  @media (max-width: 909px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 2.4rem;
  }
`;

const PaginationDiv = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HeaderDiv = styled.div`
  display: flex;
  padding: 4rem 13rem 4.5rem 13rem;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
  @media (max-width: 1199px) {
    padding: 4rem 5rem 4.5rem 5rem; /* 좌우 여백 조절 */
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Logo = styled.img`
  width: 14.5768rem;
  height: 7.2878rem;
  flex-shrink: 0;
  filter: ${(props) =>
    props.theme.mode.now === "dark"
      ? "invert(100%) sepia(100%) saturate(22%) hue-rotate(318deg) brightness(104%) contrast(107%)"
      : "none"};
`;

const Title = styled.p`
  color: ${(props) => props.theme.colors.colorMainFont};
  text-align: center;
  font-size: 4rem;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 767px) {
    font-size: 2.4rem;
  }
`;

const StyledArrowLeftIcon = styled(ArrowLeftIcon)`
  cursor: pointer;
  filter: ${(props) =>
    props.theme.mode.now === "dark"
      ? "invert(100%) sepia(100%) saturate(22%) hue-rotate(318deg) brightness(104%) contrast(107%)"
      : "none"};
`;

const StyledArrowRightIcon = styled(ArrowRightIcon)`
  cursor: pointer;
  filter: ${(props) =>
    props.theme.mode.now === "dark"
      ? "invert(100%) sepia(100%) saturate(22%) hue-rotate(318deg) brightness(104%) contrast(107%)"
      : "none"};
`;

const StyledDoubleArrowLeftIcon = styled(ArrowDoubleLeftIcon)`
  cursor: pointer;
  filter: ${(props) =>
    props.theme.mode.now === "dark"
      ? "invert(100%) sepia(100%) saturate(22%) hue-rotate(318deg) brightness(104%) contrast(107%)"
      : "none"};
`;

const StyledDoubleArrowRightIcon = styled(ArrowDoubleRightIcon)`
  cursor: pointer;
  filter: ${(props) =>
    props.theme.mode.now === "dark"
      ? "invert(100%) sepia(100%) saturate(22%) hue-rotate(318deg) brightness(104%) contrast(107%)"
      : "none"};
`;
