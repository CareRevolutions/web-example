import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import * as redux from 'react-redux'
import * as injectors from 'utils/redux-injectors'
import { Countries } from '../index'

const mockState = {
  countries: {
    countries: [
      {
        id: 'mock-id',
        name: 'United States of America',
      },
    ],
    error: undefined,
    isLoading: false,
  },
}

describe('Countries', () => {
  beforeEach(() => {
    jest.spyOn(injectors, 'useInjectReducer').mockImplementation(() => void 0)
    jest.spyOn(injectors, 'useInjectSaga').mockImplementation(() => void 0)
    jest.spyOn(redux, 'useDispatch').mockImplementation(() => jest.fn())
    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation(callback => callback(mockState))

    render(
      <MemoryRouter>
        <Countries />
      </MemoryRouter>,
    )
  })

  it('renders the page title', () => {
    expect(screen.getByText('Countries')).toBeInTheDocument()
  })

  it('renders an individual Country name', () => {
    expect(screen.getByTestId('country')).toHaveTextContent(
      'United States of America',
    )
  })

  it('does not render the Loading indicator when isLoading is false', () => {
    expect(screen.queryByTestId('loading-indicator')).toBeNull()
  })

  it('does not render an error container by default', () => {
    expect(screen.queryByTestId('error')).toBeNull()
  })
})

describe('Countries - loading', () => {
  const loadingState = {
    countries: {
      isLoading: true,
    },
  }

  beforeEach(() => {
    jest.spyOn(injectors, 'useInjectReducer').mockImplementation(() => void 0)
    jest.spyOn(injectors, 'useInjectSaga').mockImplementation(() => void 0)
    jest.spyOn(redux, 'useDispatch').mockImplementation(() => jest.fn())
    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation(callback => callback(loadingState))

    render(
      <MemoryRouter>
        <Countries />
      </MemoryRouter>,
    )
  })

  it('renders the Loading indicator when isLoading is true', () => {
    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument()
  })
})

describe('Countries - error', () => {
  const errorState = {
    countries: {
      isLoading: false,
      error: 'Something went wrong!',
    },
  }

  beforeEach(() => {
    jest.spyOn(injectors, 'useInjectReducer').mockImplementation(() => void 0)
    jest.spyOn(injectors, 'useInjectSaga').mockImplementation(() => void 0)
    jest.spyOn(redux, 'useDispatch').mockImplementation(() => jest.fn())
    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation(callback => callback(errorState))

    render(
      <MemoryRouter>
        <Countries />
      </MemoryRouter>,
    )
  })

  it('renders an error container', () => {
    expect(screen.getByTestId('error')).toBeInTheDocument()
  })
})
