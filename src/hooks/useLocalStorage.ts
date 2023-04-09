import { favoriteActions } from 'state/actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'state/store'

const useLocalStorage = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorite.favorite.favorites
  )
  const dispatch = useDispatch()

  const saveState = (data: any) => {
    if (!data.length) return
    localStorage.setItem('pokemon', JSON.stringify(data))
  }

  const loadState = () => {
    let pokemon: any = localStorage.getItem('pokemon')
    if (!pokemon) return
    pokemon = JSON.parse(pokemon)
    dispatch(favoriteActions.getState(pokemon))
  }

  useEffect(() => {
    loadState()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    saveState(favorites)
    // eslint-disable-next-line
  }, [favorites])
}

export default useLocalStorage
