import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import newsReducer from './news/news.slide'
import questionsReducer from './chatbot/questions.slide'
import answersReducer from './chatbot/answers.slide'
import uiReducer from './theme/theme.slide'
import languageReducer from './language/language.slide'
import createSagaMiddleWare from 'redux-saga'
import RootSaga from 'saga/root.saga'
import newsSaga from '../saga/news.saga';

const sageMiddleware = createSagaMiddleWare();

export const store = configureStore({
  reducer: {
    news: newsReducer,
    questions: questionsReducer,
    answers: answersReducer,
    theme: uiReducer,
    language: languageReducer,
  },
  middleware: getdefaultMiddleware =>
    getdefaultMiddleware().concat(sageMiddleware),
});

sageMiddleware.run(RootSaga);

export type AppDistpatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>