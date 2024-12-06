import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchServices, fetchServiceDetails } from '../../../api';
import {
  FETCH_SERVICE_DETAILS_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_REQUEST,
} from '../actions';

// Worker Saga: Обрабатывает FETCH_SERVICES_REQUEST
function* fetchServicesSaga() {
  try {
    const services = yield call(fetchServices);
    yield put({ type: FETCH_SERVICES_SUCCESS, services });
  } catch (error) {
    yield put({ type: FETCH_SERVICES_FAILURE, error });
  }
}

// Worker Saga: Загружает детали услуги
function* fetchServiceDetailsSaga(action) {
  try {
    const service = yield call(fetchServiceDetails, action.id);
    yield put({ type: FETCH_SERVICES_SUCCESS, services: [service] });
  } catch (error) {
    yield put({ type: FETCH_SERVICES_FAILURE, error });
  }
}

// Watcher Saga: следит за действиями
function* watchServicesSaga() {
  yield takeEvery(FETCH_SERVICES_REQUEST, fetchServicesSaga);
}

// Watcher Saga: следит за FETCH_SERVICE_DETAILS_REQUEST
function* watchServiceDetailsSaga() {
  yield takeEvery(FETCH_SERVICE_DETAILS_REQUEST, fetchServiceDetailsSaga);
}

// Root Saga: объединяет все вотчеры
export default function* rootSaga() {
  yield watchServicesSaga();
  yield watchServiceDetailsSaga();
}