import { createReducer } from '@reduxjs/toolkit';
import { CountriesState } from './types';

export const key = 'countries';

export const initialState: CountriesState = {
  countries: [],
  error: undefined,
  isLoading: false,
};

export const countriesReducer = createReducer(initialState, {
  FETCH_COUNTRIES_REQUEST: (state, action) => {
    state.isLoading = true;
  },
  FETCH_COUNTRIES_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.countries = action.payload.countries;
  },
  FETCH_COUNTRIES_ERROR: (state, action) => {
    state.isLoading = false;
    state.error = action.payload.error;
  },
});
