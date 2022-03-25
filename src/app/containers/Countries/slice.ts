import { createSlice } from '@reduxjs/toolkit'
import { CountriesState } from './types'

const initialState: CountriesState = {
  countries: [],
  error: undefined,
  isLoading: false,
}

const key = 'countries'
const slice = createSlice({
  name: key,
  initialState,
  reducers: {
    fetchCountries: state => {
      state.isLoading = true
    },
    fetchCountriesSuccess: (state, { payload }) => {
      state.isLoading = false
      state.countries = payload
    },
    fetchCountriesError: (state, { payload: error }) => {
      state.isLoading = false
      state.error = error
    },
  },
})

const { actions, reducer } = slice

export { actions, reducer, initialState, key }
