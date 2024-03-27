import { useState, useEffect } from "react";

const MOBILE_SIZE = 768;

export function useMediaQueryForMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= MOBILE_SIZE) {
        setIsMobile(() => true);
      } else {
        setIsMobile(() => false);
      }
    };

    // 최초 호출
    handleResize();

    // 창 크기가 변경될 때마다 핸들러 호출
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return isMobile;
}