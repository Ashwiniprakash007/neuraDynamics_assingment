import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFavorite } from './favoritesSlice'

export default function FavoritesPage() {
  const favorites = useSelector(state => state.favorites.items)
  const dispatch = useDispatch()

  if (favorites.length === 0) return <p>No favorites yet.</p>

  return (
    <div>
      <h2>Your Favorites</h2>
      <ul>
        {favorites.map(item => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => dispatch(removeFavorite(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
