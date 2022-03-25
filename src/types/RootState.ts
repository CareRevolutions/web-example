import { CountriesState } from 'app/containers/Countries/types'
import { ThemeState } from 'styles/theme/types'

export interface RootState {
  theme?: ThemeState
  countries?: CountriesState
}
