import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'types'
import { initialState } from './slice'

const selectDomain = (state: RootState) => state.countryDetails || initialState

export const selectLoading = createSelector(
  [selectDomain],
  countryDetailsState => countryDetailsState.isLoading,
)

export const selectError = createSelector(
  [selectDomain],
  countryDetailsState => countryDetailsState.error,
)

export const selectCountryName = createSelector(
  [selectDomain],
  countryDetailsState => countryDetailsState.countryDetails.name,
)


export const selectCountryCurrencyCode = createSelector(
  [selectDomain],
  countryDetailsState => countryDetailsState.countryDetails.currency_code,
)