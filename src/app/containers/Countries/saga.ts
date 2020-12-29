import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { actions } from './actions';

export function* fetchCountries() {
  const requestURL = `https://api.carerev.com/api/v1/countries`;

  try {
    const { countries } = yield call(request, requestURL);

    if (countries?.length > 0) {
      yield put(actions.fetchCountriesSuccess(countries));
    } else {
      yield put(actions.fetchCountriesError('No countries found.'));
    }
  } catch (err) {
    yield put(actions.fetchCountriesError(err.toString()));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* saga() {
  yield takeLatest(actions.fetchCountries.type, fetchCountries);
}
