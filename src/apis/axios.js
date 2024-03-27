import axios from 'axios';

const instance = axios.create({
  baseURL: "https://openmind-api.vercel.app/백민서",
})

export default instance;