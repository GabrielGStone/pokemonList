import { FC } from 'react'
import { FavoriteImage, PokemonCardContainer, PokemonText } from './style'
import { Image } from '@chakra-ui/react'
import star from 'assets/pokeball.png'

interface CardProps {
  favoritePokemons: any[]
  name: string
  addFavorite: any
  pokemonLink: string
}
const PokemonCard: FC<CardProps> = ({
  favoritePokemons,
  name,
  addFavorite,
  pokemonLink,
}) => {
  return (
    <PokemonCardContainer
      role="article"
      style={{
        fontWeight: favoritePokemons.includes(name) ? '600' : '300',
        backgroundColor: favoritePokemons.includes(name) ? '#e5f594' : '#fff',
      }}
      _hover={{ width: '103%', height: '103%' }}
      onClick={() => addFavorite(name)}
      key={name}
    >
      {favoritePokemons.includes(name) && <FavoriteImage src={star} />}
      <Image src={pokemonLink} alt={name} />
      <PokemonText>{name}</PokemonText>
    </PokemonCardContainer>
  )
}

export default PokemonCard
