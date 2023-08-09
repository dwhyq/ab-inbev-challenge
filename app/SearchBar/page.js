'use client'

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="mb-4 flex">
      <input
        type="text"
        placeholder="Search by product name"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="border p-2 rounded"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 ml-2 rounded font-bold">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
