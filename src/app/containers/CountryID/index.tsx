import React, { useEffect } from 'react';
//import styled from 'styled-components/macro';
//import { useSelector, useDispatch } from 'react-redux';
//import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
//import { saga } from './saga';
//import { key, countriesReducer } from './reducer';
//import { actions } from './actions';
//import { selectCountries, selectLoading, selectError } from './selectors';
//import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { Link } from 'app/components/Link';
import { PageWrapper } from 'app/components/PageWrapper';

export function CountryID() {
  //useInjectReducer({ key: key, reducer: countriesReducer });
  //useInjectSaga({ key: key, saga });

  //const countries = useSelector(selectCountries);
  //const isLoading = useSelector(selectLoading);
  //const error = useSelector(selectError);

  //const dispatch = useDispatch();
  //useEffect(() => {
  //dispatch(actions.fetchCountries());
  //}, [dispatch]);

  return (
    <PageWrapper>
      <h1>CountryID</h1>
      <Link to="/country/:id">SaiRam</Link>
    </PageWrapper>
  );
}

/*const Country = styled.li`
  color: blue;
`;

const ErrorText = styled.span`
  color: ${p => p.theme.text};
`;

const List = styled.div``;
*/
