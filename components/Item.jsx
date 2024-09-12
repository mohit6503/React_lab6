import React from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
  const { itemId } = useParams(); 
  
  return (
    <div>
      <h1>Item Details</h1>
      <p>Details for item with ID: {itemId}</p>
    </div>
  );
};

export default Item;
