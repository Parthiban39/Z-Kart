import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [items, setItems] = useState([]); // State to store items

  useEffect(() => {
    // Fetch data when the component mounts
    axios.get('http://localhost:5000/api/items') // Replace with your backend URL
      .then((response) => {
        setItems(response.data); // Store the fetched data in state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} (Quantity: {item.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
