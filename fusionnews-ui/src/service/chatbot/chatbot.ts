import axios from 'service/axios.customize';
import { IQuestions } from 'data/type';

export const getQuestions = async (): Promise<IQuestions[]> => {
  const questionEndpoint = import.meta.env.CHAT_BOT_URL;
  const response = await axios.get(questionEndpoint, {
    withCredentials: true,
  });
  return response.data.result;
};
