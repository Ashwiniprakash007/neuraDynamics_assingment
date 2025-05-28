import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch, setCategory, setSort } from '../filters/filtersSlice'

export default function ProductFilters() {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')
  const [categories, setCategories] = useState([])

  // Debounce search input
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setSearch(searchTerm))
    }, 300)
    return () => clearTimeout(timeout)
  }, [searchTerm, dispatch])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(['all', ...data]))
  }, [])

  return (
    <div style={{
      marginBottom: '2rem',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'center'
    }}>
      <input
        type="text"
        placeholder="🔍 Search products"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={styles.input}
      />

      <select onChange={e => dispatch(setCategory(e.target.value))} style={styles.select}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat.toUpperCase()}</option>
        ))}
      </select>

      <select onChange={e => dispatch(setSort(e.target.value))} style={styles.select}>
        <option value="none">Sort by</option>
        <option value="asc">Price: Low → High</option>
        <option value="desc">Price: High → Low</option>
      </select>
    </div>
  )
}

const styles = {
  input: {
    padding: '0.6rem 1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '250px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    transition: '0.3s ease',
    fontSize: '1rem',
  },
  select: {
    padding: '0.6rem 1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '180px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    background: '#fff',
    fontSize: '1rem',
    transition: '0.3s ease',
  }
}
