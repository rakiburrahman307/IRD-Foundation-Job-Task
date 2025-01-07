"use client"
import Image from "next/image";
import { useState } from "react";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected]= useState(null);
  const category = {
    title: "Introduction to Dua",
    totalDuas: 15,
    subcategories: [
      "What is Dua",
      "Conditions for Dua to be successful",
      "The Method of Dua",
      "Before Dua",
      "During Dua",
      "Prerequisites of writing Dua and drinking its water",
    ],
  };

  const toggleSubcategories = () => {
    setIsOpen(!isOpen);
  };
  const handleSelected = (idx) => {
    setIsSelected(idx);
  };

  return (
    <aside className="max-w-[429px]">
      <div className="h-[122px] space-y-4">
        <h2 className="px-[124px] py-[18px] h-[57px] text-center bg-[#1FA45B] text-white rounded-tr-[10px] rounded-tl-[10px]">
          Categories
        </h2>
        <div className="relative w-[300px] mx-auto transition-all">
          <input
            type="text"
            placeholder="Search by Categories"
            id="searchInput"
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg outline-none transition-all border-gray-300"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px] text-gray-400 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <ul className="text-[#373737] w-[314px]">
        <li className="relative">
          <button
            onClick={toggleSubcategories}
            className="w-full h-[80px] flex items-center justify-between bg-white px-4 py-2 text-left hover:bg-[#E8F0F5] duration-300 rounded-[10px]"
          >
            <div className="flex justify-between items-center gap-[5px]">
              <div className="relative w-10 h-10 bg-[#CFE0E5] rounded-lg">
                <Image src="/fever.png" alt="abater" fill sizes="100vw" />
              </div>
              <div>
                <p className="font-semibold text-[#1FA45B]">{category.title}</p>
                <p className="ml-2 text-sm leading-5 text-[#7E7E7E]">
                  {category.subcategories.length} Subcategories
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center relative">
              <div className="absolute -left-[20px] top-0 h-full border-l-[1px] border-[#E2E2E2]"></div>
              <p className="text-[#393939] font-semibold text-base">
                {category.totalDuas}
              </p>
              <span className="text-[#7E7E7E]">Duas</span>
            </div>
          </button>
          <ul
            className={`transition-all duration-500 overflow-hidden ${
              isOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            {category.subcategories.map((subcategory, index) => (
              <li
                key={index}
                className="px-4 ml-5 py-2 border-spacing-2 border-l-2 border-green-500 border-dotted"
              >
                <div onClick={()=> handleSelected(index)} className="flex cursor-pointer justify-start items-center w-full relative">
                  <div className="h-[10px] w-[10px] absolute -left-[21px] bg-green-500 border-2 border-solid border-white rounded-full"></div>
                  <span className={`${index === isSelected && "text-green-400"}`}>{subcategory}</span>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Category;
