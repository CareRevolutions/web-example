import { createReducer } from '@reduxjs/toolkit';
import { CountryState } from './types';

export const key = 'country';

export const initialState: CountryState = {
  name: '',
  currencyCode: '',
  error: '',
  isLoading: false,
};

export const countryReducer = createReducer(initialState, {
  FETCH_COUNTRY_REQUEST: (state, action) => {
    state.isLoading = true;
    state.error = '';
  },
  FETCH_COUNTRY_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.name = action.payload.name;
    state.currencyCode = action.payload.currencyCode;
    state.error = '';
  },
  FETCH_COUNTRY_ERROR: (state, action) => {
    state.isLoading = false;
    state.error = action.payload.error;
  },
});
