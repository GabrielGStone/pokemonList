import React from 'react'
import { render, screen } from '@testing-library/react'
import List from './List'
import { Provider } from 'react-redux'
import store from 'state/store'

describe('List component', () => {
  let getByText: any

  beforeEach(() => {
    getByText = render(
      <Provider store={store}>
        <List />
      </Provider>
    ).getByText
  })

  it.skip('renderiza o título da página', () => {
    const title = getByText(/LISTA/)
    expect(title).toBeInTheDocument()
  })
})
