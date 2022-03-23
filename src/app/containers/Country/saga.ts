import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { actions } from './actions';
import { FetchCountryAction } from './types';

// Fetch country by id
export function* fetchCountry(action: FetchCountryAction) {
  const { countryId } = action.payload;
  const requestURL = `https://api.carerev.com/api/v1/countries/${countryId}`;

  try {
    const response = yield call(request, requestURL);
    yield put(actions.fetchCountrySuccess(response));
  } catch (err: any) {
    yield put(actions.fetchCountryError(err.toString()));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* saga() {
  yield takeLatest(actions.fetchCountry.type, fetchCountry);
}
