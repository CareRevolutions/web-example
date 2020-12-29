import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { saga } from './saga';
import { key, countriesReducer } from './reducer';
import { actions } from './actions';
import { selectCountries, selectLoading, selectError } from './selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { Link } from 'app/components/Link';
import { PageWrapper } from 'app/components/PageWrapper';

export function Countries() {
  useInjectReducer({ key: key, reducer: countriesReducer });
  useInjectSaga({ key: key, saga });

  const countries = useSelector(selectCountries);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchCountries());
  }, [dispatch]);

  return (
    <PageWrapper>
      <h1>Countries</h1>
      {isLoading && <LoadingIndicator small />}
      {countries?.length > 0 ? (
        <List>
          {countries.map(country => (
            <Country key={country.id}>
              <Link to={`/country/${country.id}`}>{country.name}</Link>
            </Country>
          ))}
        </List>
      ) : error ? (
        <ErrorText>{error}</ErrorText>
      ) : null}
    </PageWrapper>
  );
}

const Country = styled.li`
  color: blue;
`;

const ErrorText = styled.span`
  color: ${p => p.theme.text};
`;

const List = styled.div``;
