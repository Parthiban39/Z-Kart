import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails({ products, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="not-found">
        <p>Product not found!</p>
        <button onClick={() => navigate('/')} className="back-btn">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Back
        </button>
        <div className="product-details-content">
          <div className="product-image-section">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </div>
          <div className="product-info-section">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className="product-description">
              {product.description || 'No description available.'}
            </p>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
