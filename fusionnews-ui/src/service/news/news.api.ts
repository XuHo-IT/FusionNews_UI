import axios from 'service/axios.customize';
import { INews } from 'data/type';

export const getNews = async (): Promise<INews[]> => {
  const newsEndpoint = import.meta.env.VITE_NEWS_URL;
  const response = await axios.get(newsEndpoint, {
    withCredentials: true,
  });

  return response?.data?.result?.result ?? [];
};
