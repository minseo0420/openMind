import ERROR_MESSAGE from "../../constants/message";
import REGEX from "../../constants/regex";

function validateInput(answerer) {
  // 빈 값 검사
  if (!answerer.trim()) {
    return ERROR_MESSAGE.EMPTY_FIELD;
  }

  // 특수 문자 검사
  const specialChars = REGEX.SPECIAL_CHARS_REGEX;
  if (specialChars.test(answerer)) {
    return ERROR_MESSAGE.INVALID_CHARACTERS;
  }

  // 길이 제한 검사
  if (answerer.length > ERROR_MESSAGE.MAX_LENGTH) {
    return ERROR_MESSAGE.NAME_TOO_LONG(ERROR_MESSAGE.MAX_LENGTH);
  }

  return ""; // 유효성 검사 통과
}

export default validateInput;
