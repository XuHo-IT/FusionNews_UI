import axios from 'service/axios.customize';
import { INewList } from 'data/type';

export const getNews = async ({
  filterRequest,
  pageNumber,
  pageSize
}: {
  filterRequest?: string;
  pageNumber?: number;
  pageSize?: number;
}): Promise<INewList> => {
  const newsEndpoint = import.meta.env.VITE_NEWS_URL;
  const response = await axios.get(newsEndpoint, {
    withCredentials: true,
    params: { filterRequest, pageNumber, pageSize },
  });
  return response.data.result;
};
