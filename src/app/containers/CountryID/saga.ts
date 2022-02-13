import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { actions } from './actions';

export function* fetchCountryID() {
  const requestURL = `https://api.carerev.com/api/v1/countries/:id`;

  try {
    const { countryID } = yield call(request, requestURL);

    if (countryID?.length > 0) {
      yield put(actions.fetchCountryIDSuccess(countryID));
    } else {
      yield put(actions.fetchCountryIDError('No countries found.'));
    }
  } catch (err) {
    yield put(actions.fetchCountryIDError(err.toString()));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* saga() {
  yield takeLatest(actions.fetchCountryID.type, fetchCountryID);
}
