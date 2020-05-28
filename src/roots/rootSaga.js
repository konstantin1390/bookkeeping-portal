import { all, call } from 'redux-saga/effects';
import * as AppSaga from '../client/modules/appModule/saga';
import * as AuthSaga from '../client/modules/authModule/saga';

const sagasList = [AppSaga, AuthSaga];

export default function* watchRootSaga() {
  yield all(sagasList.map(saga => call(saga)));
}
