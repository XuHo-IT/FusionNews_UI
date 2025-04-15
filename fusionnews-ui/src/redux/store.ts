import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit'
import newsReducer from './news/news.slide'
import createSagaMiddleWare from 'redux-saga'
import RootSaga from 'saga/root.saga'

const sageMiddleware = createSagaMiddleWare();

export const store = configureStore({
    reducer:{
        news:newsReducer,
    },
    middleware:getdefaultMiddleware =>
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