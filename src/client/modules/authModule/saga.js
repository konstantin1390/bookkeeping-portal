import ActionTypes from '../../../common/constants/actionTypes';
import { takeEvery } from 'redux-saga/effects';

// import * as actions from './actions';
// import * as requests from '../helpers/axiosRequests';

export default function* watchAuthModuleSaga() {
  yield takeEvery(ActionTypes.LOGIN, login);
  yield takeEvery(ActionTypes.LOGOUT, logout);
}

export function* login(token, profile) {
  try {
    console.log(token);
    console.log(profile);
  } catch (err) {
    console.error(err);
  }
}

export function* logout() {}
