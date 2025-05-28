// src/features/products/productsSelectors.js
export const selectFilteredSortedProducts = (state) => {
  let products = [...state.products.items]
  const { search, category, sort } = state.filters

  // Filter by category
  if (category !== 'all') {
    products = products.filter(p => p.category === category)
  }

  // Search by title
  if (search) {
    products = products.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
  }

  // Sort by price
  if (sort === 'asc') {
    products.sort((a, b) => a.price - b.price)
  } else if (sort === 'desc') {
    products.sort((a, b) => b.price - a.price)
  }

  return products
}
