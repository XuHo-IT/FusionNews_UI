import { call, put, takeLatest } from 'redux-saga/effects';
import { getQuestions } from 'service/chatbot/chatbot';
import { fetchQuestionsRequest,fetchQuestionsSuccess,fetchQuestionsFailure } from 'redux/chatbot/chatbot.slide';
import { IQuestions } from 'data/type';
import { PayloadAction } from '@reduxjs/toolkit';

interface FetchQuestionsParams {
  filterOn?: string;
  filterRequest?: string;
  pageNumber?: number;
  pageSize?: number;
}

function* fetchQuestionsSaga(
  action: PayloadAction<FetchQuestionsParams>
): Generator<any, void, IQuestions[]> {
  try {
    const { filterOn, filterRequest, pageNumber, pageSize } = action.payload;
    const questionsList: IQuestions[] = yield call(getQuestions, {
      filterOn,
      filterRequest,
      pageNumber,
      pageSize,
    });
    yield put(fetchQuestionsSuccess({ questionsList }));
  } catch (error: any) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    yield put(fetchQuestionsFailure(errorMessage));
  }
}

function* watchFetchQuestions() {
  yield takeLatest(fetchQuestionsRequest.type, fetchQuestionsSaga);
}

export default watchFetchQuestions;
