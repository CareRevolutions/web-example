// import { Country } from 'types/Country';

/* --- STATE --- */
export interface CountryState {
  isLoading: boolean;
  error?: string;
  name: string;
  currencyCode: string;
}
