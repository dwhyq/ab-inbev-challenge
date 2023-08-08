'use client'

import React from 'react';
import { getFirstFourWords } from '../constants';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4">
          <h3 className="font-bold">{product.name}</h3>
          <p>{getFirstFourWords(product.title)}: ${product.price}</p>
          {/* Add an "Add to Cart" button here */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
