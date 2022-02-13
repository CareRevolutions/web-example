import { createReducer } from '@reduxjs/toolkit';
import { CountryIDState } from './types';

export const key = 'countryID';

export const initialState: CountryIDState = {
  countryID: [],
  error: undefined,
  isLoading: false,
};

export const countryIDReducer = createReducer(initialState, {
  FETCH_COUNTRYID_REQUEST: (state, action) => {
    state.isLoading = true;
  },
  FETCH_COUNTRYID_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.countryID = action.payload.countryID;
  },
  FETCH_COUNTRYID_ERROR: (state, action) => {
    state.isLoading = false;
    state.error = action.payload.error;
  },
});
