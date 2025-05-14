import { call, put, takeLatest } from 'redux-saga/effects';
import { getNews } from 'service/news/news.api';
import {
  fetchNewsFailure,
  fetchNewsRequest,
  fetchNewsSuccess, // <- fixed spelling
} from 'redux/news/news.slide';
import { INewList } from 'data/type';
import { PayloadAction } from '@reduxjs/toolkit';

// Define the payload structure expected by fetchNewsRequest
interface FetchNewsParams {
  filterRequest?: string;
  pageNumber?: number;
  pageSize?: number;
}

function* fetchNews(action: PayloadAction<FetchNewsParams>): Generator<any, void, INewList> {
  try {
    const {filterRequest, pageNumber, pageSize } = action.payload;
    const newsList: INewList = yield call(getNews, {filterRequest, pageNumber, pageSize });
    yield put(fetchNewsSuccess({ newsList }));
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    yield put(fetchNewsFailure(errorMessage));
  }
}

function* watchedFetchNews() {
  yield takeLatest(fetchNewsRequest.type, fetchNews);
}

export default watchedFetchNews;
