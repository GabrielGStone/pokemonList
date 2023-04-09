import { renderHook } from '@testing-library/react-hooks'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'state/store'
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

  it('deve carregar o estado dos favoritos do local storage', () => {
    const mockDispatch = jest.fn()
    const mockUseSelector = useSelector as jest.Mock
    mockUseSelector.mockImplementation((selectorFn) =>
      selectorFn({ favorite: { favorites: [] } } as RootState)
    )
    useDispatch.mockReturnValue(mockDispatch)

    mockLocalStorage.getItem.mockReturnValue(JSON.stringify(mockFavorites))

    renderHook(() => useLocalStorage())

    expect(mockLocalStorage.getItem).toHaveBeenCalledWith('pokemon')
    expect(mockDispatch).toHaveBeenCalledWith(
      favoriteActions.getState(mockFavorites)
    )
  })

  it('deve salvar o estado dos favoritos no local storage', () => {
    const mockUseSelector = useSelector as jest.Mock
    mockUseSelector.mockImplementation((selectorFn) =>
      selectorFn({ favorite: { favorites: mockFavorites } } as RootState)
    )

    renderHook(() => useLocalStorage())

    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      'pokemon',
      JSON.stringify(mockFavorites)
    )
  })

  it('não deve salvar um estado vazio no local storage', () => {
    const mockUseSelector = useSelector as jest.Mock
    mockUseSelector.mockImplementation((selectorFn) =>
      selectorFn({ favorite: { favorites: [] } } as RootState)
    )

    renderHook(() => useLocalStorage())

    expect(mockLocalStorage.setItem).not.toHaveBeenCalled()
  })
})
