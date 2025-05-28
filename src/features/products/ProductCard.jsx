// src/features/products/ProductCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '250px',
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    transition: 'transform 0.2s ease',
    height:"400px"
  }

  const imgStyle = {
    height: '200px',
    width:"100%",
    objectFit: 'contain',
    marginBottom: '1rem',
  }

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: '600',
    marginTop: 'auto',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
  }

  const titleStyle = {
    fontSize: '15px',
    fontWeight:'600',
    marginBottom: '0.5rem',
    // textAlign: 'center',
  }

  const priceStyle = {
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#333',
  }

  return (
    <div
      style={cardStyle}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img src={product.image} alt={product.title} style={imgStyle} />
      <h3 style={titleStyle}>{product.title}</h3>
      <p style={priceStyle}>${product.price}</p>
      <Link to={`/product/${product.id}`} style={buttonStyle}>
        View Details
      </Link>
    </div>
  )
}
