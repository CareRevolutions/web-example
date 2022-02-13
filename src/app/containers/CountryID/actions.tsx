import { createAction } from '@reduxjs/toolkit';

const fetchCountryID = createAction('FETCH_COUNTRYID_REQUEST');

const fetchCountryIDSuccess = createAction(
  'FETCH_COUNTRYID_SUCCESS',
  countryID => {
    return {
      payload: {
        countryID,
      },
    };
  },
);

const fetchCountryIDError = createAction('FETCH_COUNTRYID_ERROR', error => {
  return {
    payload: {
      error,
    },
  };
});

export const actions = {
  fetchCountryID,
  fetchCountryIDSuccess,
  fetchCountryIDError,
};
