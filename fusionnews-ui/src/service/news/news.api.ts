import axios from 'service/axios.customize';
import { INews } from 'data/type';

export const getNews = async ({
  filterOn,
  filterRequest,
  pageNumber,
  pageSize
}: {
  filterOn?: string;
  filterRequest?: string;
  pageNumber?: number;
  pageSize?: number;
}): Promise<INews[]> => {
  const newsEndpoint = import.meta.env.VITE_NEWS_URL;
  const response = await axios.get(newsEndpoint, {
    withCredentials: true,
    params: { filterOn, filterRequest, pageNumber, pageSize },
  });
  return response.data.result;
};
