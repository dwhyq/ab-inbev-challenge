'use client'
import React, { useState } from "react";
import { getFirstFourWords } from "../constants";
import Image from "next/image";

const ProductList = ({ products, onAddToCart }) => {
  const [addedProducts, setAddedProducts] = useState([]);

  const handleAddToCartClick = (product) => {
    if (!addedProducts.some((addedProduct) => addedProduct.id === product.id)) {
      setAddedProducts([...addedProducts, { ...product, count: 1 }]);
    } else {
      setAddedProducts((prevAddedProducts) =>
        prevAddedProducts.map((addedProduct) =>
          addedProduct.id === product.id
            ? { ...addedProduct, count: addedProduct.count + 1 }
            : addedProduct
        )
      );
    }
    onAddToCart(product);
  };

  const isProductAdded = (productId) =>
    addedProducts.some((addedProduct) => addedProduct.id === productId);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-2">
      {(products || []).map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-md border p-2 md:p-2 flex flex-col gap-2 h-full"
        >
          <Image
            src={product.image}
            width={500}
            height={400}
            priority
            alt="Description"
          />
          <div className="flex md:flex flex-col mt-auto gap-2 justify-between items-center">
            <p className="font-bold text-sm rounded-md text-center">
              {getFirstFourWords(product.title)}
            </p>
            <p className="text-white text-sm font-bold bg-orange-600 rounded-md p-1 md:p-2">
              ${product.price}
            </p>
          </div>
          <button
            className={`${
              isProductAdded(product.id)
                ? "bg-red-500"
                : "bg-green-700"
            } text-sm text-white rounded font-bold px-0.5 py-0.5 md:p-2 mt-auto`}
            onClick={() => handleAddToCartClick(product)}
          >
            {isProductAdded(product.id)
              ? `Added (${addedProducts.find(
                  (addedProduct) => addedProduct.id === product.id
                ).count})`
              : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
