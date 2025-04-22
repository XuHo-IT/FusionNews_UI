import {all} from 'redux-saga/effects'
import newsSaga from './news.saga'
import chatbotSaga from './chatbot.saga'

function* RootSaga(){
    yield all([newsSaga(),chatbotSaga()]);
}
export default RootSaga;