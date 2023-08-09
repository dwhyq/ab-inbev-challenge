'use client'
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/page';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from localStorage
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  const handleRemoveItem = (itemToRemove) => {
    // Remove an item from the cart
    const updatedCartItems = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedCartItems);
  };

  const handleRemoveAllItems = () => {
    // Remove all items from the cart
    setCartItems([]);
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <main>
      <Cart cartItems={cartItems} onRemoveItem={handleRemoveItem} onRemoveAllItems={handleRemoveAllItems} totalQuantity={totalQuantity}/>
    </main>
  );
};

export default CartPage;
