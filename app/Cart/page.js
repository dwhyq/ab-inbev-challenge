import React from "react";
import Link from "next/link";

const Cart = ({
  cartItems,
  onRemoveItem,
  onRemoveAllItems,
  totalQuantity,
  updateCartCount,
}) => {
  // Calculate the total price of all items in the cart
  let totalPrice = 0;
  if ((cartItems || []).length > 0) {
    // Calculate total price using reduce
    totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
  // Round the total price to one decimal place
  const roundedTotalPrice = totalPrice.toFixed(1);

  return (
    <div className="p-2 rounded-md min-h-screen">
      <h2 className="font-bold text-center">Shopping Cart</h2>
      {/* Map through each item in the cart */}
      {(cartItems || []).map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-between items-center mt-2 border-b-2"
        >
          <div className="flex flex-col sm:flex-row justify-between w-full">
            <div className="mb-1 sm:mb-0">{item.title}</div>
            {/* Display the total price for the specific item */}
            <p className="bg-orange-500 text-white rounded-lg px-1 font-bold text-md w-fit">
              ${item.price * item.quantity}
            </p>
          </div>

          <div className="flex justify-between w-full">
            {/* Button to remove an item from the cart */}
            <button
              className="text-red-500"
              onClick={() => {
                onRemoveItem(item);
                // Update cart count when an item is removed
                updateCartCount(totalQuantity - item.quantity);
              }}
            >
              Remove
            </button>
            {/* Display the item title and quantity */}
            <span className="mt-1 sm:mt-0">(Qty: {item.quantity})</span>
          </div>
        </div>
      ))}
      {/* Conditionally render the "Remove all items" button */}
      {(cartItems || []).length > 0 && (
        <div className="mt-4">
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => {
              onRemoveAllItems();
              // Set cart count to 0 when all items are removed
              updateCartCount(0);
            }}
          >
            Remove all items
          </button>
        </div>
      )}
      {/* Display total quantity and total price */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-2">
        <div className="mt-2 bg-black text-white px-3 py-1 rounded w-fit">
          Total Quantity: {totalQuantity}
        </div>
        <div className="font-bold bg-green-700 rounded-md w-fit p-1 text-white mt-2 sm:mt-0">
          Total: ${roundedTotalPrice}
        </div>
      </div>
      <div className="mt-8 text-center">
        {/* Link to continue shopping */}
        <Link href="/">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default Cart;
