import  { CountryDetails } from 'types/CountryDetails'

/* --- STATE --- */
export interface CountryDetailsState {
  isLoading: boolean
  error?: string
  countryDetails: CountryDetails
}
