import { Country } from 'types/Country';

/* --- STATE --- */
export interface CountriesState {
  isLoading: boolean;
  error?: string;
  countries: Country[];
}
