import { render } from '@testing-library/react'
import Home from './Home'

describe('Home component', () => {
  it('deve renderizar o botão de navegação, o título, a saudação e a imagem corretamente', () => {
    const { getByText, getByAltText } = render(<Home />)

    const ButtonElement = getByText('go to list ->' || 'go to home <-')
    expect(ButtonElement).toBeInTheDocument()

    const titleElement = getByText('Pokedex - Lista de Pokemons')
    expect(titleElement).toBeInTheDocument()

    const textElement = getByText(
      'Bem-vindo à Pokedex! Explore e salve seu pokemon favorito'
    )
    expect(textElement).toBeInTheDocument()

    const imageElement = getByAltText('pokeball')
    expect(imageElement).toBeInTheDocument()
  })
})
