import { createAction } from '@reduxjs/toolkit';
import { FetchCountry } from './types';

const fetchCountry = createAction<FetchCountry>('FETCH_COUNTRY_REQUEST');

const fetchCountrySuccess = createAction('FETCH_COUNTRY_SUCCESS', response => {
  const { name, currency_code: currencyCode } = response;

  return {
    payload: {
      name,
      currencyCode,
    },
  };
});

const fetchCountryError = createAction('FETCH_COUNTRY_ERROR', error => {
  return {
    payload: {
      error,
    },
  };
});

export const actions = {
  fetchCountry,
  fetchCountrySuccess,
  fetchCountryError,
};
