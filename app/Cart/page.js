import React from 'react';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="border p-4 mb-3 mt-3 rounded-md">
      <h2 className="font-bold">Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mt-2">
          <p>{item.title}</p>
          <p className='bg-orange-500 text-white rounded-lg px-1 font-bold text-md'>${item.price}</p>
        </div>
      ))}
      <div className="mt-4 font-bold bg-green-700 rounded-md w-fit p-1 text-white">Total: ${totalPrice}</div>
    </div>
  );
};

export default Cart;
