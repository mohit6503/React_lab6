import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams(); 

  const productDetails = {
    1: { name: 'Laptop', description: 'A high-performance laptop with 16GB RAM and 512GB SSD.' },
    2: { name: 'Smartphone', description: 'A sleek smartphone with a 64MP camera and 5G support.' },
    3: { name: 'Headphones', description: 'Noise-cancelling wireless headphones with long battery life.' }
  };

  const product = productDetails[productId];

  if (!product) {
    return <div><p>Product not found!</p></div>; 
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
