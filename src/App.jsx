import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductsList from './features/products/ProductsList'
import ProductDetail from './features/products/ProductDetail'
// import FavoritesPage from './features/favorites/FavoritesPage'
import Navbar from './components/Navbar'
import Favorites from './features/favorites/Favorites'
// import Header from './components/Header'

export default function AppRoutes() {
  return (
    <Router>
      <Navbar/>
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </Router>
  )
}
