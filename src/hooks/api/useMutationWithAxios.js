import { useMutation } from '@tanstack/react-query'

import requests from '../../apis/request'

export function useSubjectsMutation(answerer, queryClient) {
  const query = useMutation({
    mutationFn: async () => await requests.postSubjects(answerer),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['subjects']})
    },
  });

  return query;
}

export function useQuestionsMutation(id, inputValue, queryClient) {
  return useMutation({
    mutationFn: async () => await requests.postQuestions(id, inputValue),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [`questions_${id}`] })
    },
  });
}

export function useReactionsMutation(questionId, type, queryClient) {
  return useMutation({
    mutationFn: async () => await requests.postReactions(questionId, type),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [`question_${questionId}`] })
    },
  });
}