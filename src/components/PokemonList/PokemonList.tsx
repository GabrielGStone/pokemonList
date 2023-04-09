import { Spinner } from '@chakra-ui/react'
import PokemonCard from 'components/Pokemoncard/PokemonCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import { GridCard } from './style'
import { FC } from 'react'
import addLeadingZeros from 'utils/addLeadingZeros'

interface ListProps {
  pokemons: any
  getNextPokemons: any
  addFavorite: any
  favoritePokemons: any
}

const PokemonList: FC<ListProps> = ({
  pokemons,
  getNextPokemons,
  addFavorite,
  favoritePokemons,
}) => {
  return (
    <InfiniteScroll
      dataLength={pokemons?.results.length || 10}
      next={getNextPokemons}
      hasMore={true}
      loader={<Spinner />}
    >
      {pokemons && (
        <GridCard className="pokemonCard">
          {pokemons.results.map((data: any, index: number) => {
            const { name } = data
            const pokemonLink = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addLeadingZeros(
              index + 1
            )}.png`
            return (
              <div key={index}>
                <PokemonCard
                  name={name}
                  pokemonLink={pokemonLink}
                  favoritePokemons={favoritePokemons}
                  addFavorite={addFavorite}
                />
              </div>
            )
          })}
        </GridCard>
      )}
    </InfiniteScroll>
  )
}

export default PokemonList
