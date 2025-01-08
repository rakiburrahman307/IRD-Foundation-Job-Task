import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <header
      className='flex justify-between items-center mx-auto p-4'
      style={{ width: "calc(100% - 200px)" }}
    >
      {/* Logo on the left */}
      <div className='text-2xl font-semibold text-[#393939]'>Dua Page</div>

      {/* Search input and button on the right */}
      <div className='relative mx-auto'>
        <input
          className='w-[371px] h-[52px] py-2 px-4 border border-gray-300 rounded-md focus:outline-none '
          type='search'
          placeholder='Search by Dua Name'
        />
        <button className='absolute inset-y-0 right-1 flex items-center px-[15px] my-1 py-[10px] text-[#868686] bg-[#F3F4F6] border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none'>
          <svg
            className='h-5 w-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z'
            />
          </svg>
        </button>
      </div>
      <div className='flex items-center justify-center cursor-pointer gap-2'>
        <Image
          src='/profile-avatar.png'
          alt='Logo'
          width={45}
          height={45}
          className='rounded-full'
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-3 h-3'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
          />
        </svg>
      </div>
    </header>
  );
};

export default Nav;
