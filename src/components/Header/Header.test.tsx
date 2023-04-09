import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

it('Header é renderizado corretamente com a propriedade isHome', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header isHome />
    </MemoryRouter>
  )
  const linkElement = getByText(/ir para a lista ->/i)
  expect(linkElement).toBeInTheDocument()
})

it('Header é renderizado corretamente sem a propriedade isHome', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )
  const linkElement = getByText(/voltar para a home <-/i)
  expect(linkElement).toBeInTheDocument()
})
