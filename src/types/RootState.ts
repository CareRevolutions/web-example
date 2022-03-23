import { CountriesState } from 'app/containers/Countries/types';
import { ThemeState } from 'styles/theme/types';
import { CountryState } from 'app/containers/Country/types';

export interface RootState {
  country?: CountryState;
  theme?: ThemeState;
  countries?: CountriesState;
}
