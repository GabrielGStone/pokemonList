import React from 'react'
import { render, screen } from '@testing-library/react'
import List from './List'

it('renderiza o título da página', async () => {
  render(<List />)
  const title = await screen.findByText('LISTA')
  expect(title).toBeInTheDocument()
})
