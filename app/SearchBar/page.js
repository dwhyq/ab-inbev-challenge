'use client'

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log("here again..................");
    onSearch(searchQuery);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by product name"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="border p-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 ml-2 rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
