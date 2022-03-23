import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { actions } from './actions';

export function* fetchCountries() {
  const requestURL = `https://api.carerev.com/api/v1/countries`;

  const { countries, error } = yield call(request, requestURL);

  if (error || countries?.length === 0) {
    yield put(actions.fetchCountriesError(error || 'No countries found.'));
    return;
  }
  yield put(actions.fetchCountriesSuccess(countries));
}

/**
 * Root saga manages watcher lifecycle
 */
export function* saga() {
  yield takeLatest(actions.fetchCountries.type, fetchCountries);
}
