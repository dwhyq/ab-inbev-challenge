'use client'
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/page';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Retrieve cart items from localStorage
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
      setCartCount(savedCartItems.length);
    }
  }, []);

  const handleRemoveItem = (itemToRemove) => {
    // Remove an item from the cart
    const updatedCartItems = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedCartItems);
    setCartCount(totalQuantity - itemToRemove.quantity); updateLocalStorage(updatedCartItems);
  };
  const updateLocalStorage = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const handleRemoveAllItems = () => {
    // Remove all items from the cart
    setCartItems([]);
    setCartCount(0);
    localStorage.removeItem('cartItems');
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <main>
       <Cart
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onRemoveAllItems={handleRemoveAllItems}
        totalQuantity={totalQuantity}
        updateCartCount={setCartCount}
      />
      
    </main>
  );
};

export default CartPage;
