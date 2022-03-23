import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { actions } from './actions';
import { FetchCountryAction } from './types';

// Fetch country by id
export function* fetchCountry(action: FetchCountryAction) {
  const { countryId } = action.payload;
  const requestURL = `https://api.carerev.com/api/v1/countries/${countryId}`;

  const response = yield call(request, requestURL);
  // If there is an error, return the error message
  if (response.error) {
    yield put(actions.fetchCountryError(response.error));
    return;
  }
  // Otherwise, return the response
  yield put(actions.fetchCountrySuccess(response));
}

/**
 * Root saga manages watcher lifecycle
 */
export function* saga() {
  yield takeLatest(actions.fetchCountry.type, fetchCountry);
}
