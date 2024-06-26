import { createGlobalStyle, css } from "styled-components";

import '/assets/css/reset.css';
import '/assets/css/color.css';

const GlobalStyles = createGlobalStyle`
${reset}
@font-face {
  font-family: "Pretendard";
  font-weight: 400;
  font-style: normal;
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot");
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2")
      format("woff2"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff")
      format("woff"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf")
      format("truetype");
  font-display: swap;
}

@font-face {
  font-family: "Pretendard";
  font-weight: 600;
  font-style: normal;
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot");
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot?#iefix")
      format("embedded-opentype"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff2")
      format("woff2"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff")
      format("woff"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.ttf")
      format("truetype");
  font-display: swap;
}
`;

export default GlobalStyles;