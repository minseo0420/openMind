import { useQuery, useInfiniteQuery } from '@tanstack/react-query'

import requests from '../../apis/request'

export function useInfiniteSubjectsQuery({limit}) {
  const {data, isSuccess , isPending, hasNextPage, fetchNextPage} = useInfiniteQuery({
    queryKey: ["subjects"],
    queryFn: async ({ pageParam=0 }) => await requests.getSubjects({limit, offset: pageParam}),
    getNextPageParam: (lastPage) => {
      const inputString = lastPage.next;
      const match = /offset=(\d+)/.exec(inputString);
      const offsetValue = match ? match[1] : null; // 다음 페이지 없을 경우 null

      return offsetValue;
    },
    select: (data) => {
      const [firstData] = data.pages;
      const { count } = firstData;
    
      const flattenResults = data.pages.flatMap((page) => page.results);
    
      return { count, results: flattenResults };
    },
  })

  return {data, isSuccess ,isPending, hasNextPage, fetchNextPage}
}

export function useSubjectQuery(id) {
  const {isSuccess, isLoading, isError, data} = useQuery({
    queryKey: [`subject_${id}`],
    queryFn: async () => await requests.getSubject(id)}
  );
  
  return {isSuccess, isLoading, isError, data};
}

export function useInfiniteQuestionsQuery({id, limit}) {
  const {data, isSuccess , isPending, hasNextPage, fetchNextPage} = useInfiniteQuery({
    queryKey: [`questions_${id}`],
    queryFn: async ({ pageParam=0 }) => await requests.getQuestions({id, limit, offset: pageParam}),
    getNextPageParam: (lastPage) => {
      const inputString = lastPage.next;
      const match = /offset=(\d+)/.exec(inputString);
      const offsetValue = match ? match[1] : null;

      return offsetValue;
    },
    select: (data) => {
      const [firstData] = data.pages;
      const { count } = firstData;
    
      const flattenResults = data.pages.flatMap((page) => page.results);
    
      return { count, result: flattenResults };
    },
  })

  return {data, isSuccess ,isPending, hasNextPage, fetchNextPage}
}

export function useGetQuestionQuery(questionId) {
  const {isSuccess, isLoading, isError, data} = useQuery({
    queryKey: [`question_${questionId}`],
    queryFn: async () => await requests.getQuestion(questionId)}
  );
  
  return {isSuccess, isLoading, isError, data};
}