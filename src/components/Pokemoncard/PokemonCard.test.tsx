import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PokemonCard from './PokemonCard'

const mockProps = {
  favoritePokemons: ['bulbasaur'],
  name: 'bulbasaur',
  addFavorite: jest.fn(),
  pokemonLink: 'https://pokeapi.co/api/v2/pokemon/1/',
}

it('renderiza um card de pokémon', () => {
  render(<PokemonCard {...mockProps} />)
  const pokemonCard = screen.getByRole('article')
  expect(pokemonCard).toBeInTheDocument()
})

it('exibe o nome do pokémon', () => {
  render(<PokemonCard {...mockProps} />)
  const pokemonName = screen.getByText(mockProps.name)
  expect(pokemonName).toBeInTheDocument()
})

it('adiciona um pokémon aos favoritos quando o card é clicado', () => {
  render(<PokemonCard {...mockProps} />)
  const pokemonCard = screen.getByRole('article')
  userEvent.click(pokemonCard)
  expect(mockProps.addFavorite).toHaveBeenCalledWith(mockProps.name)
})

it('exibe o ícone de favorito quando o pokémon está na lista de favoritos', () => {
  render(<PokemonCard {...mockProps} />)
  const favoriteIcon = screen.getByAltText('bulbasaur')
  expect(favoriteIcon).toBeInTheDocument()
})

it('não exibe o ícone de favorito quando o pokémon não está na lista de favoritos', () => {
  const mockProps = {
    favoritePokemons: [],
    name: 'bulbasaur',
    addFavorite: jest.fn(),
    pokemonLink: 'https://pokeapi.co/api/v2/pokemon/1/',
  }
  render(<PokemonCard {...mockProps} />)
  const favoriteIcon = screen.queryByAltText('Ícone de favorito')
  expect(favoriteIcon).not.toBeInTheDocument()
})
