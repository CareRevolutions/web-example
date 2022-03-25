import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { saga } from './saga'
import { key, countriesReducer } from './reducer'
import { actions } from './actions'
import { selectCountries, selectLoading, selectError } from './selectors'
import { LoadingIndicator } from 'app/components/LoadingIndicator'
import { Link } from 'app/components/Link'
import { PageWrapper } from 'app/components/PageWrapper'

export const Countries = () => {
  useInjectReducer({ key: key, reducer: countriesReducer })
  useInjectSaga({ key: key, saga })

  const countries = useSelector(selectCountries)
  const isLoading = useSelector(selectLoading)
  const error = useSelector(selectError)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.fetchCountries())
  }, [dispatch])

  return (
    <PageWrapper>
      <h1>Countries</h1>
      {isLoading && <LoadingIndicator small />}
      {countries?.length > 0 && (
        <ul>
          {countries.map(country => (
            <li key={country.id}>
              <Link to={`/country/${country.id}`}>{country.name}</Link>
            </li>
          ))}
        </ul>
      )}
      {error && <div>{error}</div>}
    </PageWrapper>
  )
}
