import { screen, render } from '@testing-library/react'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom'

describe('Home component', () => {
  let getByText: any

  beforeEach(() => {
    getByText = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    ).getByText
  })

  it('deve renderizar o botão de navegação corretamente', () => {
    const ButtonElement = getByText('go to list ->')
    expect(ButtonElement).toBeInTheDocument()
  })

  it('deve renderizar o título corretamente', () => {
    const titleElement = getByText(/Pokedex - Lista de Pokemons/)
    expect(titleElement).toBeInTheDocument()
  })

  it('deve renderizar a saudação corretamente', () => {
    const textElement = getByText(
      /Bem-vindo à Pokedex! Explore e salve seu pokemon favorito/
    )
    expect(textElement).toBeInTheDocument()
  })

  it('deve renderizar a imagem corretamente', () => {
    const imageElement = screen.getByAltText('pokeball')
    expect(imageElement).toBeInTheDocument()
  })
})
