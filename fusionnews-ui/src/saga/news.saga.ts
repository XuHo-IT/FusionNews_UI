import {call,put,takeLatest} from 'redux-saga/effects'
import { getNews } from 'service/news/news.api'
import { PayloadAction } from '@reduxjs/toolkit'
import { fetchNewsFailure,fetchNewsRequest,fetchNewsSucess } from 'redux/news/news.slide'
import { INews } from 'data/type'

function* fetchNews(): Generator<unknown, void, INews[]> {
    try {
      const newsList: INews[] = yield call(getNews);
      yield put(fetchNewsSucess({ newsList }));
    } catch (error) {
      if (error instanceof Error) {
        yield put(fetchNewsFailure(error.message));
      } else {
        yield put(fetchNewsFailure('An unknown error occurred'));
      }
    }
  }
function* watchedFetchNews(){
    yield takeLatest(fetchNewsRequest.type,fetchNews);
}

export default watchedFetchNews;