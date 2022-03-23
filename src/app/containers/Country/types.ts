export interface CountryState {
  isLoading: boolean;
  error: string;
  name: string;
  currencyCode: string;
}

export interface FetchCountry {
  countryId: string;
}

export interface FetchCountryAction {
  payload: FetchCountry;
  type: string;
}
