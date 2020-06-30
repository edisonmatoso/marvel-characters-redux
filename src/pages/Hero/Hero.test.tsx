import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import { MemoryRouter, Router } from 'react-router-dom'
import store from '../../store'
import Hero from '.'
import { ListHero } from '..'

describe('Hero', () => {
  it('should render Hero', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/hero']}>
          <Hero />
        </MemoryRouter>
      </Provider>
    )

    expect(container).toBeDefined()
  })

  it.skip('should render a hero details', async () => {
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

    const card = getByText(/3-D Man/i)

    fireEvent.click(card)

    history.push('/hero/1011334')

    await waitFor(() => getByText(/Avengers: The Initiative (2007 - 2010)/i))

    expect(getByText(/Avengers: The Initiative (2007 - 2010)/i)).toBeDefined()
  })
})
