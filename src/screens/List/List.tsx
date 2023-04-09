import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from 'components/Header'
import Layout from 'components/Layout'
import usePokemon from 'hooks/usePokemon'
import { Title } from './styles'
import './styles.css'
import { RootState } from 'state/store'
import PokemonList from 'components/PokemonList/PokemonList'
import { favoriteActions } from 'state/actions'

const List = () => {
  const dispatch = useDispatch()
  const { getPokemon } = usePokemon()
  const [pokemons, setPokemons] = useState<responseType | undefined>()

  const favoritePokemons = useSelector(
    (state: RootState) => state.favorite.favorite.favorites
  )

  const pokemonList = async () => {
    const res = await getPokemon()
    setPokemons(res)
  }

  useEffect(() => {
    pokemonList()
    //eslint-disable-next-line
  }, [])

  const getNextPokemons = async () => {
    const nextPokemons = await getPokemon(pokemons?.next)
    setPokemons({
      ...nextPokemons,
      results: [...(pokemons?.results || []), ...nextPokemons.results],
    })
  }

  const addFavorite = (name: string) => {
    dispatch(favoriteActions.toggleFavorite(name))
    if (favoritePokemons.length == 1) {
      window.localStorage.clear()
    }
  }

  return (
    <>
      <Layout>
        <Header />
        <Title>LISTA</Title>
        <PokemonList
          pokemons={pokemons}
          getNextPokemons={getNextPokemons}
          addFavorite={addFavorite}
          favoritePokemons={favoritePokemons}
        />
      </Layout>
    </>
  )
}

export default List
