import { createSlice } from '@reduxjs/toolkit'
import { CountryDetailsState } from './types'

const initialState: CountryDetailsState = {
  countryDetails: {
    name: '',
    currency_code: ''
  },
  error: undefined,
  isLoading: false,
}

const key = 'countryDetails'
const slice = createSlice({
  name: key,
  initialState,
  reducers: {
    fetchCountryDetails: (state, action) => {
      state.isLoading = true
    },
    fetchCountryDetailsSuccess: (state, { payload }) => {
      state.isLoading = false
      state.countryDetails = payload
      state.error = undefined
    },
    fetchCountryDetailsError: (state, { payload: error }) => {
      state.isLoading = false
      state.error = error
      state.countryDetails = initialState.countryDetails
    },
  },
})

const { actions, reducer } = slice

export { actions, reducer, initialState, key }