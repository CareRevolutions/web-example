/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react'
import { lazyLoad } from 'utils/loadable'
import { LoadingIndicator } from 'app/components/LoadingIndicator'

export const HomePage = lazyLoad(
  () => import('./index'),
  module => module.HomePage,
  {
    fallback: (
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LoadingIndicator />
      </div>
    ),
  },
)
