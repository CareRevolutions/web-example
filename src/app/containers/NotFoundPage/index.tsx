import * as React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { StyleConstants } from 'styles/StyleConstants'

export const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <div
        style={{
          alignItems: 'center',
          color: 'orangered',
          display: 'flex',
          flexDirection: 'column',
          height: `calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT})`,
          justifyContent: 'center',
          minHeight: '320px',
        }}
      >
        <h1
          style={{
            marginTop: '-8vh',
            fontWeight: 'bold',
            fontSize: '3.375rem',
          }}
        >
          4
          <span
            aria-label="Crying Face"
            role="img"
            style={{ fontSize: '3.125rem' }}
          >
            😢
          </span>
          4
        </h1>
        <p
          style={{
            fontSize: '1rem',
            lineHeight: '1.5',
            margin: '0.625rem 0 1.5rem 0',
          }}
        >
          Page not found.
        </p>
        <Link to={process.env.PUBLIC_URL + '/'}>Return to Home Page</Link>
      </div>
    </>
  )
}
