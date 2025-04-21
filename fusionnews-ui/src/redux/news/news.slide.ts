import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INews } from "data/type";

export interface NewsState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  newsList: INews[];
  news: INews;
  filterOn?: string;
  filterRequest?: string;
  pageNumber?: number;
  pageSize?: number;
}

const initialState: NewsState = {
  status: 'idle',
  error: null,
  newsList: [],
  news: {
    articleId: '',
    title: '',
    link: '',
    keywords: [],
    creator: [],
    creatorDisplay: '',
    description: '',
    pubDate: '',
    pubDateTZ: '',
    imageUrl: '',
    videoUrl: null,
    sourceId: '',
    sourceName: '',
    sourcePriority: 0,
    sourceUrl: '',
    sourceIcon: '',
    language: '',
    country: [],
    category: [],
    duplicate: false,
  }
};

const NewsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    fetchNewsRequest: (state, action: PayloadAction<{ filterOn?: string }>) => {
      state.status = 'loading';
      state.error = null;
      if (action.payload?.filterOn) {
        state.filterOn = action.payload.filterOn;  // Store filterOn in the state (optional)
      }
    },
    fetchNewsSuccess: (state, action: PayloadAction<{ newsList: INews[] }>) => {
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
