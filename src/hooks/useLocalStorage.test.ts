import { renderHook } from '@testing-library/react-hooks'
import { useSelector } from 'react-redux'
import * as redux from 'react-redux'
import { favoriteActions } from 'state/actions'
import useLocalStorage from './useLocalStorage'

jest.mock('react-redux')

describe('useLocalStorage', () => {
  const mockFavorites = ['Pikachu', 'Charmander']
  const mockLocalStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
  }

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
      writable: true,
    })
    jest.clearAllMocks()
  })

  it('deve salvar o estado no local storage quando os favoritos mudam', () => {
    const mockFavorites = [{ id: 1, name: 'Pikachu' }]
    const dispatch = jest.fn()

    jest
      .spyOn(redux, 'useSelector')
      .mockReturnValue({ favorite: { favorites: mockFavorites } })

    const { result } = renderHook(() => useLocalStorage())

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'pokemon',
      JSON.stringify(mockFavorites)
    )
  })

  it('deve carregar o estado do local storage na montagem do componente', () => {
    const mockFavorites = [{ id: 1, name: 'Pikachu' }]
    localStorage.setItem('pokemon', JSON.stringify(mockFavorites))
    const dispatch = jest.fn()

    renderHook(() => useLocalStorage())

    expect(dispatch).toHaveBeenCalledWith(
      favoriteActions.getState(mockFavorites)
    )
  })

  it('não deve salvar um estado vazio no local storage', () => {
    const mockUseSelector = useSelector as jest.Mock
    mockUseSelector.mockImplementation((selectorFn) =>
      selectorFn({ favorite: { favorites: [] } })
    )

    renderHook(() => useLocalStorage())

    expect(mockLocalStorage.setItem).not.toHaveBeenCalled()
  })
})
