import {all} from 'redux-saga/effects'
import newsSaga from './news.saga'

function* RootSaga(){
    yield all([newsSaga()]);
}
export default RootSaga;