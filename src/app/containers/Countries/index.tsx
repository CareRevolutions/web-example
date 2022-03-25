import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { saga } from './saga'
import { key, reducer, actions } from './slice'
import { selectCountries, selectLoading, selectError } from './selectors'
import { LoadingIndicator } from 'app/components/LoadingIndicator'

export const Countries = () => {
  useInjectReducer({ key: key, reducer: reducer })
  useInjectSaga({ key: key, saga })

  const countries = useSelector(selectCountries)
  const isLoading = useSelector(selectLoading)
  const error = useSelector(selectError)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.fetchCountries())
  }, [dispatch])

  return (
    <div
      style={{
        boxSizing: 'content-box',
        margin: '0 auto',
        padding: '0 1.5rem',
        width: '960px',
      }}
    >
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
    </div>
  )
}
