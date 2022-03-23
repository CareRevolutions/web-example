import { createReducer } from '@reduxjs/toolkit';
import { CountriesState } from './types';

export const key = 'countries';

export const initialState: CountriesState = {
  countries: [],
  error: '',
  isLoading: false,
};

export const countriesReducer = createReducer(initialState, {
  FETCH_COUNTRIES_REQUEST: state => {
    state.isLoading = true;
    state.error = '';
  },
  FETCH_COUNTRIES_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.countries = action.payload.countries;
    state.error = '';
  },
  FETCH_COUNTRIES_ERROR: (state, action) => {
    state.isLoading = false;
    state.error = action.payload.error;
  },
});
