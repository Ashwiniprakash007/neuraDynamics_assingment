// // src/features/products/ProductDetail.jsx
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { addFavorite } from '../favorites/favoritesSlice'

// export default function ProductDetail() {
//   const { id } = useParams()
//   const [product, setProduct] = useState(null)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then(res => res.json())
//       .then(setProduct)
//   }, [id])

//   if (!product) return <p>Loading...</p>

//   return (
//     <div style={{ padding: '1rem' }}>
//       <img src={product.image} alt={product.title} style={{ height: '200px' }} />
//       <h2>{product.title}</h2>
//       <p>{product.description}</p>
//       <p><b>Category:</b> {product.category}</p>
//       <p><b>Price:</b> ${product.price}</p>
//       <button onClick={() => dispatch(addFavorite(product))}>
//         Add to Favorites
//       </button>
//     </div>
//   )
// }




// src/features/products/ProductDetail.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../favorites/favoritesSlice'
import './ProductDetail.css' // Import CSS

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct)
  }, [id])

   const handleAddFavorite = () => {
    dispatch(addFavorite(product))
    alert(`${product.title} has been added to favorites!`)
  }

  if (!product) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="description">{product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p className="price"><strong>Price:</strong> ${product.price}</p>
        <button onClick={handleAddFavorite}>
          Add to Favorites
        </button>
      </div>
    </div>
  )
}
