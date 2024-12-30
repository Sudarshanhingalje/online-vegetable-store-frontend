import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const filteredProducts = location.state?.filteredProducts || [];

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index} className="product-item">
              <img src={`/images/${product.img}`} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="price">${product.price} / kg</div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
