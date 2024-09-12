import React, { useState } from 'react';

const Cart = () => {
  
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Laptop', price: 1000, quantity: 1 },
    { id: 2, name: 'Smartphone', price: 700, quantity: 1 },
    { id: 3, name: 'Headphones', price: 200, quantity: 1 },
  ]);

    const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <strong>{item.name}</strong> - ${item.price}
                <div>
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span> Quantity: {item.quantity} </span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <p>Total: ${item.price * item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
