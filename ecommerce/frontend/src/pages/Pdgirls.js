//girls product page
import React from 'react';
import Header from '../components/Header';

const Pdgirls = () => {
  const products = [
    { id: 1, name: 'Product 1', image: 'image1.jpg', price: 100, description: 'This is product 1' },
    { id: 2, name: 'Product 2', image: 'image2.jpg', price: 200, description: 'This is product 2' },
    // Add more products as needed
  ];

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Pdgirls;