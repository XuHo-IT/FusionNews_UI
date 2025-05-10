import { call, put, takeLatest } from "redux-saga/effects";
import { getAnswers, getQuestions } from "service/chatbot/chatbot";
import {
  fetchQuestionsRequest,
  fetchQuestionsSuccess,
  fetchQuestionsFailure,
} from "redux/chatbot/questions.slide";
import {
  fetchAnswersRequest,
  fetchAnswersSuccess,
  fetchAnswersFailure,
} from "redux/chatbot/answers.slide";
import { IAnswer, IQuestions } from "data/type";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchQuestionsSaga(): Generator<any, void, IQuestions[]> {
  try {
    const questionsList: IQuestions[] = yield call(getQuestions);
    yield put(fetchQuestionsSuccess({ questionsList }));
  } catch (error: any) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    yield put(fetchQuestionsFailure(errorMessage));
  }
}
function* fetchAnswerSaga(action: PayloadAction<{ question_id: number }>): Generator<any, void, IAnswer> {
  try {
    const { question_id } = action.payload;
    const answer: IAnswer = yield call(getAnswers, question_id);
    yield put(fetchAnswersSuccess({ answer }));
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    yield put(fetchAnswersFailure(errorMessage));
  }
}



function* watchFetchQuestions() {
  yield takeLatest(fetchQuestionsRequest.type, fetchQuestionsSaga);
  yield takeLatest(fetchAnswersRequest.type, fetchAnswerSaga);

}

export default watchFetchQuestions;
