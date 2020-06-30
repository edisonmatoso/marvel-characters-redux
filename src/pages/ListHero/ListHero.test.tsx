import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import { MemoryRouter, Router } from 'react-router-dom'
import store from '../../store'
import ListHero from '.'

describe('ListHero', () => {
  it('should render List Hero', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/list-hero']}>
          <ListHero />
        </MemoryRouter>
      </Provider>
    )

    expect(container).toBeDefined()
  })

  it.skip('should render a card hero', async () => {
    const history = createMemoryHistory()
    history.push({
      pathname: '/list-hero',
      search: '?name=3-D Man'
    })

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <ListHero />
        </Router>
      </Provider>
    )

    await waitFor(() => getByText(/3-D Man/i))

    expect(getByText(/3-D Man/i)).toBeDefined()
  })
})
