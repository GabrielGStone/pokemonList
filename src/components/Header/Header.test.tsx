import { render } from '@testing-library/react'
import Header from './Header'

test('Header é renderizado corretamente com a propriedade isHome', () => {
  const { getByText } = render(<Header isHome />)
  const linkElement = getByText(/ir para a lista ->/i)
  expect(linkElement).toBeInTheDocument()
})

test('Header é renderizado corretamente sem a propriedade isHome', () => {
  const { getByText } = render(<Header />)
  const linkElement = getByText(/voltar para a home <-/i)
  expect(linkElement).toBeInTheDocument()
})
