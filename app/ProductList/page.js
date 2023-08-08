import React from "react";
import { getFirstFourWords } from "../constants";
import Image from "next/image";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-gray-500 border p-2 md:p-4 flex flex-col gap-2"
        >
          <Image
            src={product.image}
            width={500}
            height={400}
            alt="Description"
          />
          <div className="flex flex-col justify-between items-center">
            <p className="font-bold text-sm rounded-md text-center">
              {getFirstFourWords(product.title)}
            </p>
            <p className="text-white font-bold bg-orange-600 rounded-md p-1 md:p-2">
              ${product.price}
            </p>
          </div>
          <button
            className="bg-black text-white rounded p-1 md:p-2 mt-auto"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
