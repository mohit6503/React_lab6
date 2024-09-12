import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); 

  const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Smartphone' },
    { id: 3, name: 'Headphones' }
  ];

  const goToProductPage = (productId) => {
    navigate(`/product/${productId}`); 
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} 
            <button onClick={() => goToProductPage(product.id)}>View {product.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
