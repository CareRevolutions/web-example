import React from 'react';
import { Link } from 'app/components/Link';

export function ErrorView() {
  return (
    <div>
      <h1>
        Sorry...
        <br />
        Something went wrong on our end
      </h1>
      <p>
        Please try again later. If the problem persists, please contact the customer service.
      </p>
      <Link to='/'>HOME</Link>
    </div>
  );
}