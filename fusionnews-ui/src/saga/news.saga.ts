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
    const { filterRequest = '', pageNumber = 1, pageSize = 10 } = action.payload;

    // Generate a unique key based on the request params
    const cacheKey = `news_${filterRequest}_${pageNumber}_${pageSize}`;
    const cachedRaw = localStorage.getItem(cacheKey);

    if (cachedRaw) {
      const cached = JSON.parse(cachedRaw);
      const now = Date.now();
      const cacheDuration = 5 * 60 * 1000; // 5 minutes

      if (cached.timestamp && now - cached.timestamp < cacheDuration) {
        yield put(fetchNewsSuccess({ newsList: cached.data }));
        return;
      } else {
        localStorage.removeItem(cacheKey); // expired, remove old cache
      }
    }

    // No valid cache — fetch from API
    const newsList: INewList = yield call(getNews, { filterRequest, pageNumber, pageSize });

    // Store new data with timestamp
    localStorage.setItem(
      cacheKey,
      JSON.stringify({ data: newsList, timestamp: Date.now() })
    );

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
