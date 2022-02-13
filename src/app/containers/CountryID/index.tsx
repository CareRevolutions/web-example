import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { saga } from './saga';
import { key, countryIDReducer } from './reducer';
import { actions } from './actions';
import { selectLoading, selectError } from './selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { Link } from 'app/components/Link';
import { PageWrapper } from 'app/components/PageWrapper';

export function CountryID() {
  useInjectReducer({ key: key, reducer: countryIDReducer });
  useInjectSaga({ key: key, saga });

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
  dispatch(actions.fetchCountryID());
  }, [dispatch]);

  return (
    <PageWrapper>
      <h1>CountryID</h1>
      {isLoading && <LoadingIndicator small />}
      {countryID?.length > 0 ? (
        <Link to="/country/:id">CountryID</Link>
      ) : error ? (
        <ErrorText>{error}</ErrorText>
      ) : null}
    </PageWrapper>
  );
}

const countryID = styled.li`
  color: blue;
`;

const ErrorText = styled.span`
  color: ${p => p.theme.text};
`;

//const List = styled.div``;
