import React from 'react';

const SortDropdown = ({ onSort }) => {
  const handleSort = e => {
    onSort(e.target.value);
  };

  return (
    <select onChange={handleSort} className="border p-2">
      <option value="">Sort by Price</option>
      <option value="asc">Lowest Price</option>
      <option value="desc">Highest Price</option>
    </select>
  );
};

export default SortDropdown;
