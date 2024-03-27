import axios from "./axios"

const ERROR_MESSAGE = "에러 발생:"

const requests = Object.freeze({
  SUBJECTS: "/subjects/",
  QUESTIONS: "/questions/",
  ANSWERS: "/answers/",

  getSubjects: async function({limit, offset}) {
    try {
      const { data } = await axios.get("/subjects/", {
        params: {
          limit,
          offset
        },
      });

      return data;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  },
  postSubjects : async function(answerer) {
    try {
      const {data} = await axios.post("/subjects/", {
        name: answerer,
      });

      return data;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  },
  getSubject: async function(id) {
    try {
      const { data } = await axios.get(`/subjects/${id}/`);

      return data;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  },
  getQuestions: async function({id, limit, offset}) {
    try {
      const { data } = await axios.get(`/subjects/${id}/questions/`, {
        params: {
          limit,
          offset
        },
      });

      return data;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  },
  postQuestions: async function(id, inputValue) {
    try {
      await axios.post(`/subjects/${id}/questions/`, {
        content: inputValue,
      });

      return true;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  },
  getNext: async function(nextUrl) {
    try {
      const { data } = await axios.get(nextUrl);

      return data;
    } catch (error) {
      console.error('에러 발생:', error);
    }
  },
  getQuestion: async function(questionId) {
    try {
      const { data } = await axios.get(`/questions/${questionId}/`);

      return data;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  },
  postReactions: async function(questionId, type) {
    try {
      await axios.post(`/questions/${questionId}/reaction/`, {
        type: type,
      });

      return true;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  }
})

export default requests