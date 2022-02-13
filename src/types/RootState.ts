import { CountriesState } from 'app/containers/Countries/types';
import { CountryIDState } from 'app/containers/CountryID/types';
import { ThemeState } from 'styles/theme/types';

export interface RootState {
  theme?: ThemeState;
  countries?: CountriesState;
  countryID?: CountryIDState;
}
