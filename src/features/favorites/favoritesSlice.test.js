import favoritesReducer, { addFavorite, removeFavorite } from './favoritesSlice'

describe('favoritesSlice', () => {
  const initialState = { items: [] }

  test('should handle initial state', () => {
    expect(favoritesReducer(undefined, { type: 'unknown' })).toEqual({ items: [] })
  })

  test('should add a favorite item', () => {
    const product = { id: 1, title: 'Test Product' }
    const nextState = favoritesReducer(initialState, addFavorite(product))
    expect(nextState.items).toHaveLength(1)
    expect(nextState.items[0]).toEqual(product)
  })

  test('should not add duplicate favorites', () => {
    const product = { id: 1, title: 'Test Product' }
    const stateWithOne = { items: [product] }
    const nextState = favoritesReducer(stateWithOne, addFavorite(product))
    expect(nextState.items).toHaveLength(1)
  })

  test('should remove a favorite item', () => {
    const product = { id: 1, title: 'Test Product' }
    const stateWithOne = { items: [product] }
    const nextState = favoritesReducer(stateWithOne, removeFavorite(1))
    expect(nextState.items).toHaveLength(0)
  })
})
