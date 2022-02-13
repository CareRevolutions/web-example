import { createReducer } from '@reduxjs/toolkit';
import { CountriesState } from './types';

export const key = 'countries';

export const initialState: CountriesState = {
  countries: [],
  error: undefined,
  isLoading: false,
};

export const countriesReducer = createReducer(initialState, {
  FETCH_COUNTRYID_REQUEST: (state, action) => {
    state.isLoading = true;
  },
  FETCH_COUNTRYID_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.countries = action.payload.countries;
  },
  FETCH_COUNTRYID_ERROR: (state, action) => {
    state.isLoading = false;
    state.error = action.payload.error;
  },
});
