import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  favorites: any[]
}

const initialState: InitialState = {
  favorites: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    removeAllFavorites: (state) => {
      state.favorites = []
    }, //remover todos os favoritos, usado para debugar

    toggleFavorite: (state, action) => {
      if (state.favorites && state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(
          (favorite) => favorite !== action.payload
        )
      } else if (state.favorites) {
        state.favorites.push(action.payload)
      }
    },
    getState: (state, action) => {
      state.favorites = action.payload
    },
  },
})

export const { actions, reducer } = favoriteSlice
