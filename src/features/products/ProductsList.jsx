// src/features/products/ProductsList.jsx
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from './productsSlice'
import { selectFilteredSortedProducts } from './productsSelectors'
import ProductCard from './ProductCard'
import ProductFilters from './ProductFilters'
import './ProductsList.css'  // import the CSS file

export default function ProductsList() {
  const dispatch = useDispatch()
  const products = useSelector(selectFilteredSortedProducts)
  const status = useSelector(state => state.products.status)
  const error = useSelector(state => state.products.error)

  useEffect(() => {
    if (status === 'idle') dispatch(fetchProducts())
  }, [status, dispatch])

  if (status === 'loading') return <p>Please wait...</p>
  if (status === 'failed') return <p>Error: {error}</p>

  return (
    <>
      <ProductFilters />
      <div className="products-grid">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  )
}
