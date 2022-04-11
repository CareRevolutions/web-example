import { CountriesState } from 'app/containers/Countries/types';
import { CountryDetailsState } from 'app/containers/CountryDetails/types';
import { ThemeState } from 'styles/theme/types';

export interface RootState {
  theme?: ThemeState
  countries?: CountriesState
  countryDetails?: CountryDetailsState
}
