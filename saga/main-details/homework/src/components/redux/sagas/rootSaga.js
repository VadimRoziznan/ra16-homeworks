// rootSaga.js
import { all } from 'redux-saga/effects';
import { watchServicesSaga } from './sagas';
import { watchServiceDetailsSaga } from './sagas';

export default function* rootSaga() {
  yield all([
    watchServicesSaga(),
    watchServiceDetailsSaga(),
  ]);
}