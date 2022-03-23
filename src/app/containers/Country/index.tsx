import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { saga } from './saga';
import { key, countryReducer } from './reducer';
import { actions } from './actions';
import { selectCountry, selectLoading, selectError } from './selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { PageWrapper } from 'app/components/PageWrapper';

export function Country({ match }) {
  useInjectReducer({ key: key, reducer: countryReducer });
  useInjectSaga({ key: key, saga });

  const countryId = match.params.id;

  // Redux state
  const { name, currencyCode } = useSelector(selectCountry);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchCountry({ countryId }));
    // eslint-disable-next-line
  }, []);

  return (
    <PageWrapper>
      <h1>Country</h1>
      {isLoading && <LoadingIndicator small />}
      <CountryDetails>
        <h2>{name}</h2>
        <p>{currencyCode}</p>
      </CountryDetails>
      {error ? <ErrorText>{error}</ErrorText> : null}
    </PageWrapper>
  );
}

const ErrorText = styled.span`
  color: ${p => p.theme.text};
`;

const CountryDetails = styled.div``;
