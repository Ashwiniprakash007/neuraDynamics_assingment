import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFavorite } from './favoritesSlice'

export default function FavoritesPage() {
  const favorites = useSelector(state => state.favorites.items || [])
  const dispatch = useDispatch()

  if (favorites.length === 0) return <p style={{textAlign:"center"}}>No favorites yet.</p>

  return (
    <div style={{ padding: '1rem', background: '#f8f9fa' }}>
      <h2 style={{ marginBottom: '1rem' }}>Your Favorites</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem'
      }}>
        {favorites.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '1rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            background: '#fff',
            width:"300px"
          }}>
            <img src={product.image} alt={product.title} style={{ height: '150px', objectFit: 'contain', marginBottom: '0.5rem', margin:"auto" }} />
            <h3 style={{ fontSize: '1rem' }}>{product.title}</h3>
            <p><b>${product.price}</b></p>
            <button
              onClick={() => dispatch(removeFavorite(product.id))}
              style={{
                padding: '0.5rem 1rem',
                background: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '0.5rem'
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
