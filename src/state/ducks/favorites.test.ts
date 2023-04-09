import { actions, reducer } from './favorite'

describe('favoriteSlice', () => {
  const initialState = { favorites: [] }

  it('deve remover todos os favoritos', () => {
    const newState = reducer(initialState, actions.removeAllFavorites())
    expect(newState.favorites).toEqual([])
  })

  it('deve adicionar um favorito quando não encontrar o nome na lista', () => {
    const newState = reducer(initialState, actions.toggleFavorite('item1'))
    expect(newState.favorites).toEqual(['item1'])
  })

  it('deve remover o favorito quando o nome estiver na lista', () => {
    const state = { favorites: ['item1'] }
    const newState = reducer(state, actions.toggleFavorite('item1'))
    expect(newState.favorites).toEqual([])
  })

  it('deve carregar o estado salvo pelo getState', () => {
    const newState = reducer(initialState, actions.getState(['item1', 'item2']))
    expect(newState.favorites).toEqual(['item1', 'item2'])
  })
})
