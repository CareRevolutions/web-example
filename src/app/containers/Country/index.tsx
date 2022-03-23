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
import { NotFoundPage } from '../NotFoundPage/Loadable';

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
      {isLoading && <LoadingIndicator small />}
      {!error && !isLoading && (
        <CountryDetails>
          <h1>Country</h1>
          <h3>
            {name}, {currencyCode}
          </h3>
        </CountryDetails>
      )}
      {error && <NotFoundPage />}
    </PageWrapper>
  );
}

const CountryDetails = styled.div``;
