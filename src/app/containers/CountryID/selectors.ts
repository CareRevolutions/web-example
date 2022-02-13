import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './reducer';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.countryID || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  countryIDState => countryIDState.isLoading,
);

export const selectError = createSelector(
  [selectDomain],
  countryIDState => countryIDState.error,
);

export const selectCountryID = createSelector(
  [selectDomain],
  countryIDState => countryIDState.countryID,
);
