import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="CareRev Currency App"
          content="Find the Currency for Any Country"
        />
      </Helmet>
      <div
        style={{
          boxSizing: 'content-box',
          margin: '0 auto',
          padding: '0 1.5rem',
          width: '960px',
        }}
      >
        <h1>CareRev Currency App</h1>
        <Link to="/countries">Show Countries</Link>
      </div>
    </>
  )
}
