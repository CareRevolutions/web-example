import { CountryID } from 'types/CountryID';

/* --- STATE --- */
export interface CountryIDState {
  isLoading: boolean;
  error?: string;
  countryID: CountryID[];
}