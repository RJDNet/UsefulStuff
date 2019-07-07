import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_NUMBER } from '../actions/types';
import { fetchedNumber } from '../actions/numberActions';

// Workers
function* workerNumberSaga() {
  yield put(fetchedNumber());
}

// Watchers
export function* watcherNumberSaga() {
  yield takeLatest(FETCH_NUMBER, workerNumberSaga);
}