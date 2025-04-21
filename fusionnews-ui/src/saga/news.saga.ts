import { call, put, takeLatest } from 'redux-saga/effects';
import { getNews } from 'service/news/news.api';
import {
  fetchNewsFailure,
  fetchNewsRequest,
  fetchNewsSuccess, // <- fixed spelling
} from 'redux/news/news.slide';
import { INews } from 'data/type';
import { PayloadAction } from '@reduxjs/toolkit';

// Define the payload structure expected by fetchNewsRequest
interface FetchNewsParams {
  filterOn?: string;
  filterRequest?: string;
  pageNumber?: number;
  pageSize?: number;
}

function* fetchNews(action: PayloadAction<FetchNewsParams>): Generator<any, void, INews[]> {
  try {
    const { filterOn, filterRequest, pageNumber, pageSize } = action.payload;
    const newsList: INews[] = yield call(getNews, { filterOn, filterRequest, pageNumber, pageSize });
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
