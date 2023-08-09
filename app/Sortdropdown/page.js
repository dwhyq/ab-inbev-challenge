import React from 'react';

const SortDropdown = ({ onSort }) => {
  const handleSort = e => {
    console.log(e.target.value, "here...............")
    onSort(e.target.value);
  };

  return (
    <select onChange={handleSort} className="border p-2 rounded bg-black text-white font-bold hover:text-white"
    >
      <option value="" className='bg-orange-500'>Sort by Price</option>
      <option value="asc" className='bg-orange-500'>Lowest Price</option>
      <option value="desc" className='bg-orange-500'>Highest Price</option>
    </select>
  );
};

export default SortDropdown;
