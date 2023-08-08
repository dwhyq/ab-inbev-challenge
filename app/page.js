'use client'
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList/page';
import SearchBar from './SearchBar/page';
import SortDropdown from './Sortdropdown/page';
import AxiosApiClient from './useApiClient';
import { BASE_URL, PRODUCT_PATH } from './constants';
import Cart from './Cart/page';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch product data from an API (replace with your API endpoint)
    console.log("anything..........")
    const getRequest = new AxiosApiClient(BASE_URL)
getRequest.get(PRODUCT_PATH)
.then(response => {
  setProducts(response);
  console.log(response, products.length, "our products.......................", products[0])
})
.catch(error => console.log("some error, ", error))
  }, []);
  

  const handleSearch = searchQuery => {
    // Filter products based on searchQuery
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSort = direction => {
    // Sort products based on direction ('asc' or 'desc')
    const sorted = [...filteredProducts].sort((a, b) =>
      direction === 'asc' ? a.price - b.price : b.price - a.price
    );
    setFilteredProducts(sorted);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <SearchBar onSearch={handleSearch} />
      <SortDropdown onSort={handleSort} />
      <ProductList products={products} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default Home;
