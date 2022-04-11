import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { actions } from './slice';

export function* fetchCountryDetails(action) {
  const requestURL = `https://api.carerev.com/api/v1/countries/${action.payload}`;

  try {
    const countryDetails = yield call(request, requestURL);

    if (countryDetails?.id !== '') {
      yield put(actions.fetchCountryDetailsSuccess(countryDetails));
    } else {
      yield put(actions.fetchCountryDetailsError('Country details not found.'));
    }
  } catch (err) {
    yield put(actions.fetchCountryDetailsError(err.toString()));
  }
}

export function* countryDetailsSaga() {
  yield takeLatest(actions.fetchCountryDetails.type, fetchCountryDetails);
}