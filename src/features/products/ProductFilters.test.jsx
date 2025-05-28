import { render, screen, fireEvent } from '@testing-library/react'
import ProductFilters from './ProductFilters'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from '../filters/filtersSlice'

const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
})

test('search input dispatches setSearch action after debounce', async () => {
  vi.useFakeTimers()

  render(
    <Provider store={store}>
      <ProductFilters />
    </Provider>
  )

  const input = screen.getByPlaceholderText(/search products/i)
  fireEvent.change(input, { target: { value: 'shirt' } })

  // Advance timers by debounce duration
  vi.advanceTimersByTime(300)

  // Check the Redux state updated (can also spy on dispatch)
  expect(store.getState().filters.search).toBe('shirt')

  vi.useRealTimers()
})
