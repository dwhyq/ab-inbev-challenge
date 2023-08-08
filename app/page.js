"use client";
import React, { useState, useEffect } from "react";
import ProductList from "./ProductList/page";
import SearchBar from "./SearchBar/page";
import SortDropdown from "./Sortdropdown/page";
import AxiosApiClient from "./useApiClient";
import { BASE_URL, PRODUCT_PATH } from "./constants";
import Cart from "./Cart/page";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [displayCart, setDisplayCart] = useState(false); 


  useEffect(() => {
    // Fetch product data from an API (replace with your API endpoint)
    const getRequest = new AxiosApiClient(BASE_URL);
    getRequest
      .get(PRODUCT_PATH)
      .then((response) => {
        setProducts(response);
        setDisplayedProducts(response);
        console.log("rerender.....");
      })
      .catch((error) => console.log("some error, ", error));
  }, []);

  const handleSearch = (searchQuery) => {
    // Filter products based on searchQuery
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDisplayedProducts(filtered);
  };

  const handleSort = (direction) => {
    // Sort products based on direction ('asc' or 'desc')
    const sorted = [...products].sort((a, b) =>
      direction === "asc" ? a.price - b.price : direction === "desc" ? b.price - a.price : null
    );
    setDisplayedProducts(sorted);
  };
  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    setDisplayCart(true); // Set displayCart to true when item is added
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <SearchBar onSearch={handleSearch} />
      <SortDropdown onSort={handleSort} />
      {displayCart && <Cart cartItems={cartItems} />} 
      <ProductList products={displayedProducts} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Home;
