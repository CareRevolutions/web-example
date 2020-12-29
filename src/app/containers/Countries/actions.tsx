import { createAction } from '@reduxjs/toolkit';

const fetchCountries = createAction('FETCH_COUNTRIES_REQUEST');

const fetchCountriesSuccess = createAction(
  'FETCH_COUNTRIES_SUCCESS',
  countries => {
    return {
      payload: {
        countries,
      },
    };
  },
);

const fetchCountriesError = createAction('FETCH_COUNTRIES_ERROR', error => {
  return {
    payload: {
      error,
    },
  };
});

export const actions = {
  fetchCountries,
  fetchCountriesSuccess,
  fetchCountriesError,
};
