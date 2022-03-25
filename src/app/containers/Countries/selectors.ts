import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'types'
import { initialState } from './slice'

const selectDomain = (state: RootState) => state.countries || initialState

export const selectLoading = createSelector(
  [selectDomain],
  countriesState => countriesState.isLoading,
)

export const selectError = createSelector(
  [selectDomain],
  countriesState => countriesState.error,
)

export const selectCountries = createSelector(
  [selectDomain],
  countriesState => countriesState.countries,
)
