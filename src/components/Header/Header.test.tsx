import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

describe('Componente Header', () => {
  it('Header é renderizado corretamente com a propriedade isHome', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header isHome />
      </BrowserRouter>
    )

    const linkElement = getByText(/go to list ->/)
    expect(linkElement).toBeInTheDocument()
  })

  it('Header é renderizado corretamente sem a propriedade isHome', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const linkElement = getByText(/go to home <-/)
    expect(linkElement).toBeInTheDocument()
  })
})
