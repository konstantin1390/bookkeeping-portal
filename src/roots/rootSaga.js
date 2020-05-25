import { all, call } from "redux-saga/effects";
import * as AppSaga from "../client/modules/appModule/saga";

const sagasList = [AppSaga];

export default function* watchRootSaga() {
  yield all(sagasList.map(saga => call(saga)));
}
