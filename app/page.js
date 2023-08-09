'use client'
import React, { useState, useEffect } from "react";
import ProductList from "./ProductList/page";
import SearchBar from "./SearchBar/page";
import SortDropdown from "./Sortdropdown/page";
import AxiosApiClient from "./useApiClient";
import { BASE_URL, PRODUCT_PATH } from "./constants";
import Link from "next/link";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create a reusable API client instance
    const apiClient = new AxiosApiClient(BASE_URL);

    // Fetch product data from the API
    apiClient
      .get(PRODUCT_PATH)
      .then((response) => {
        setProducts(response);
        setDisplayedProducts(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching product data:", error);
        setIsLoading(false);
      });

    // Load saved cart items from local storage
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  useEffect(() => {
    // Update local storage when cart items change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleSearch = (searchQuery) => {
    // Filter products based on search query
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDisplayedProducts(filtered);
  };

  const handleSort = (direction) => {
    // Sort products based on price direction
    const sorted = [...products].sort((a, b) =>
      direction === "asc"
        ? a.price - b.price
        : direction === "desc"
        ? b.price - a.price
        : 0
    );
    setDisplayedProducts(sorted);
  };

  const handleAddToCart = (product) => {
    // Add product to cart, either by updating quantity or adding a new item
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex w-fit">
        <span className="text-2xl font-bold">Buy</span>
        <span className="text-2xl font-bold underline-offset-2 text-orange-500">more</span>
        <span className="text-2xl font-bold underline-offset-2 ">!</span>
        </div>
        
        <Link href="/CartPage">
          <button className="bg-orange-500 text-white font-bold px-3 py-1 rounded">
            Cart ({totalQuantity})
          </button>
        </Link>
      </div>
      <SearchBar onSearch={handleSearch} />
      <SortDropdown onSort={handleSort} />
      {isLoading ? (
        <div className="text-center mt-4">Loading...</div>
      ) : (
        <ProductList products={displayedProducts} onAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

export default Home;
