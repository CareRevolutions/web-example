import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { countryDetailsSaga } from './saga';
import { key, reducer, actions } from './slice'
import { selectCountryName, selectCountryCurrencyCode, selectLoading, selectError } from './selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { PageWrapper } from 'app/components/PageWrapper';
import { ErrorView } from 'app/components/Error';
import { Link } from 'app/components/Link';

export function CountryDetails() {
  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: countryDetailsSaga });

  const { id } = useParams<{ id: string }>();
  const countryName = useSelector(selectCountryName);
  const countryCurrencyCode = useSelector(selectCountryCurrencyCode);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchCountryDetails(id));
  }, [dispatch]);


  return (
    <PageWrapper>
      {isLoading && <LoadingIndicator small />}
      {!isLoading && error && <ErrorView />}
      {!isLoading && !error &&
        <>
          <h1>Country Details</h1>
          <div>
            {`Name: ${countryName}`}
            <br />
            {`Currency Code: ${countryCurrencyCode}`}
          </div>
          <br />
          <Link to='/countries'>BACK</Link>
        </>}
    </PageWrapper>
  );
}
