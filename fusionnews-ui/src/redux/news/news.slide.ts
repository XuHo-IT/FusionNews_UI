import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewList, INews } from "data/type";

export interface NewsState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  newsList: INewList;
  news: INews;
  filterRequest?: string;
  pageNumber?: number;
  pageSize?: number;
}

const initialState: NewsState = {
  status: 'idle',
  error: null,
  newsList: {
    newsApiResponse: {
      status: '',
      totalResults: 0,
      articles: []
    },
    totalPages: 0,
    currentPage: 1,
    pageSize: 10,
    totalResults: 0
  },
  news: {
    source: {
      id: '',
      name: '',
    },
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    content: '',
  },
  filterRequest: "america",
  pageSize: 10,
};

const NewsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    fetchNewsRequest: (state, action: PayloadAction<{
      filterRequest?: string;
      pageNumber?: number;
      pageSize?: number;
    }>) => {
      state.status = 'loading';
      state.error = null;
      if (action.payload?.filterRequest) {
        state.filterRequest = action.payload.filterRequest;
      }
      if (action.payload?.pageNumber) {
        state.pageNumber = action.payload.pageNumber;
      }
      if (action.payload?.pageSize) {
        state.pageSize = action.payload.pageSize;
      }
    },
    fetchNewsSuccess: (state, action: PayloadAction<{ newsList: INewList }>) => {
      state.status = 'succeeded';
      state.newsList = action.payload.newsList;
    },
    fetchNewsFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    fetchSingleNewsSuccess: (state, action: PayloadAction<INews>) => {
      state.status = 'succeeded';
      state.news = action.payload;
    }
  }

});

export const {
  fetchNewsRequest,
  fetchNewsSuccess,
  fetchNewsFailure,
  fetchSingleNewsSuccess
} = NewsSlice.actions;

export default NewsSlice.reducer;
