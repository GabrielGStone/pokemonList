import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'state/store'
import { favoriteActions } from 'state/actions'

const useLocalStorage = <T extends Array<any>>(
  key: string,
  initialValue: T
): [T, (value: T) => void] => {
  const dispatch = useDispatch()
  const favorites = useSelector(
    (state: RootState) => state.favorite.favorite.favorites
  )
  const [value, setValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
    value.map((pokemon) => {
      dispatch(favoriteActions.toggleFavorite(pokemon))
    })
    // dispatch
    console.log(favorites)
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
