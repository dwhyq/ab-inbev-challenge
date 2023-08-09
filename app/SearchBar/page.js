'use client'

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="mb-4 flex flex-col sm:flex-row">
  <input
    type="text"
    placeholder="Search by product name"
    value={searchQuery}
    onChange={e => setSearchQuery(e.target.value)}
    className="border p-2 rounded mb-2 sm:mb-0 sm:mr-2 sm:w-1/2"
  />
  <button onClick={handleSearch} className="bg-black text-white px-4 py-2 rounded font-bold w-full sm:w-auto">
    Search
  </button>
</div>

  );
};

export default SearchBar;
