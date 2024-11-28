import React from "react";
import { Link } from "react-router-dom";
import "./SearchResults.css";

function SearchResults({ query, products }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-results-container">
      <h2>Search Results for: "{query}"</h2>
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <Link to={`/product/${product.id}`} className="details-link">
                View Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found . Please try again.</p>
      )}
    </div>
  );
}

export default SearchResults;
