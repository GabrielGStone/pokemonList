import { renderHook } from '@testing-library/react-hooks'
import { useSelector } from 'react-redux'
import * as ReactRedux from 'react-redux'
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

  it.skip('deve carregar o estado do local storage na montagem do componente', () => {
    const mockDispatch = jest.fn()
    jest.mock('react-redux', () => ({
      useDispatch: () => mockDispatch,
      useSelector: () => [],
    }))

    renderHook(() => useLocalStorage())

    expect(mockLocalStorage.getItem).toHaveBeenCalled()
    expect(mockDispatch).toHaveBeenCalledWith(
      favoriteActions.getState(mockFavorites)
    )
  })

  it.skip('deve salvar o estado no local storage quando os favoritos mudam', () => {
    const mockNewFavorites = [{ id: 1, name: 'Pikachu' }]
    const dispatch = jest.fn()

    jest
      .spyOn(ReactRedux, 'useSelector')
      .mockReturnValue({ favorite: { favorites: mockNewFavorites } })

    renderHook(() => useLocalStorage())

    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      'favorites',
      JSON.stringify(mockNewFavorites)
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
