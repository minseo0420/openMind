import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useValidateUserInLocalStorage(userName) {
  const [hasAnswerCondition, setHasAnswerCondition] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const postId = location.pathname.split("/")[2];
    const isKeyInLocalStorage = localStorage.getItem(userName) == postId;

    if (isKeyInLocalStorage) {
      setHasAnswerCondition(true);
    } else {
      setHasAnswerCondition(false);
    }
  }, [location.pathname]);

  return hasAnswerCondition;
}