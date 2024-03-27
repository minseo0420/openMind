const FACEBOOK_SHARE_URL = "https://www.facebook.com/sharer/sharer.php?href=";
const SMALL_WINDOW_SIZE = 'width=400 ,height=800';
const APP_URL = "https://www.openmind-coreact.store"; 
//const LOCAL_URL = "http://localhost:3000" 

export function shareToFacebook() {
  window.open(FACEBOOK_SHARE_URL,'공유하기' ,SMALL_WINDOW_SIZE)
}

export function shareToKakao() {
  const { Kakao } = window;

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '오픈 마인드',
      description: '질문 남기기',
      imageUrl:
      'https://ibb.co/VDqwJQF',
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 합니다.
        webUrl: APP_URL,
      },
    },
  });
}