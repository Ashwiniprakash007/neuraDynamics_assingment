import filtersReducer, { setSearch, setCategory, setSort } from './filtersSlice'

describe('filtersSlice reducer', () => {
  const initialState = {
    search: '',
    category: 'all',
    sort: 'none',
  }

  it('should return the initial state when passed an empty action', () => {
    const result = filtersReducer(undefined, { type: '' })
    expect(result).toEqual(initialState)
  })

  it('should handle setSearch', () => {
    const action = setSearch('shoes')
    const result = filtersReducer(initialState, action)
    expect(result.search).toBe('shoes')
    // Other fields should stay unchanged
    expect(result.category).toBe('all')
    expect(result.sort).toBe('none')
  })

  it('should handle setCategory', () => {
    const action = setCategory('electronics')
    const result = filtersReducer(initialState, action)
    expect(result.category).toBe('electronics')
    expect(result.search).toBe('')
    expect(result.sort).toBe('none')
  })

  it('should handle setSort', () => {
    const action = setSort('price-asc')
    const result = filtersReducer(initialState, action)
    expect(result.sort).toBe('price-asc')
    expect(result.search).toBe('')
    expect(result.category).toBe('all')
  })
})
