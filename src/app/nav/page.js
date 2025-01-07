import React from "react";

const Nav = () => {
  return (
    <header
      className='flex justify-between items-center mx-auto p-4'
      style={{ width: "calc(100% - 200px)" }}
    >
      {/* Logo on the left */}
      <div className='text-2xl font-semibold text-[#393939]'>Dua Page</div>

      {/* Search input and button on the right */}
      <div className='flex items-center space-x-2'>
        <input
          type='text'
          placeholder='Search...'
          className='p-2 rounded-l-md border border-gray-300 focus:outline-none'
        />
        <button className='bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-md'>
          Search
        </button>
      </div>
    </header>
  );
};

export default Nav;
