import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import { Link } from 'app/components/Link';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <PageWrapper>
        <h1>CareRev Sample App</h1>
        <Link to="/countries">Show Countries</Link>
      </PageWrapper>
    </>
  );
}
