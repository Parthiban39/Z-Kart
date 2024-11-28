import React, { useState, useEffect } from 'react';
import product1 from '../assets/images/product1.png';
import product2 from '../assets/images/product2.png';
import banner1 from '../assets/images/banner1.png';
import './FeaturedProducts.css';

const FeaturedProducts = ({ addToCart }) => {
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { 
          id: 1, 
          name: 'Smartphone', 
          price: 499, 
          image: product1, 
          description: 'A powerful smartphone with a sleek design.',
          category: 'Electronics'
        },
        { 
          id: 2, 
          name: 'Laptop', 
          price: 999, 
          image: product2, 
          description: 'High-performance laptop for work and play.',
          category: 'Computers'
        },
        { 
          id: 3, 
          name: 'Headphones', 
          price: 199, 
          image: banner1, 
          description: 'Noise-canceling headphones for the best sound experience.',
          category: 'Accessories'
        },
        { 
          id: 4, 
          name: 'Smartwatch', 
          price: 249, 
          image: product1, 
          description: 'Track your fitness with this stylish smartwatch.',
          category: 'Wearables'
        },
        { 
          id: 5, 
          name: 'Tablet', 
          price: 349, 
          image: product2, 
          description: 'A versatile tablet for work and entertainment.',
          category: 'Electronics'
        },
        { 
          id: 6, 
          name: 'Earbuds', 
          price: 129, 
          image: banner1, 
          description: 'Wireless earbuds with premium sound.',
          category: 'Accessories'
        },
        { 
          id: 7, 
          name: 'Digital Watch', 
          price: 199, 
          image: banner1, 
          description: 'A classic digital watch for everyday use.',
          category: 'Wearables'
        },
        { 
          id: 8, 
          name: 'Tab', 
          price: 199, 
          image: product2, 
          description: 'A lightweight tablet perfect for browsing and reading.',
          category: 'Electronics'
        },
        { 
          id: 9, 
          name: 'iPhone', 
          price: 999, 
          image: banner1, 
          description: 'Latest iPhone with amazing features.',
          category: 'Smartphones'
        },
        { 
          id: 10, 
          name: 'Smart Watch', 
          price: 199, 
          image: product2, 
          description: 'Smart watch with fitness tracking and notifications.',
          category: 'Wearables'
        }
      ]);
    }, 1000);
  }, []);

  if (!products) {
    return <div className="loading">Loading...</div>;
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product); 
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null); 
  };

  return (
    <div className="featured-products-container">
      <h2 className="section-heading">Featured Products</h2>
      
      <div className="product-cards">
        {products.map((product) => (
          <div 
            className="product-card" 
            key={product.id}
            onClick={() => handleProductClick(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              
            />
            <div className="product-details">
              <h5 className="product-name">{product.name}</h5>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button
                className="add-to-cart-btn"
                onClick={(e) => {
                  e.stopPropagation(); 
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="product-details-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseDetails}>&times;</span>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image-large" />
            <p><strong>Price:</strong> ${selectedProduct.price.toFixed(2)}</p>
            <p><strong>Category:</strong> {selectedProduct.category}</p>
            <p><strong>Description:</strong> {selectedProduct.description}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => {
                addToCart(selectedProduct);
                handleCloseDetails();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
