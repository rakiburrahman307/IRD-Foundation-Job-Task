"use client";
import { useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { BsFilesAlt } from "react-icons/bs";
import { MdWindow } from "react-icons/md";
export default function Settings() {
  const [selected, setSelected] = useState("Appearance Settings");
  const [nightMode, setNightMode] = useState(false);

  const settingsOptions = [
    { id: "language", label: "Language Settings", icon: <IoLanguage /> },
    { id: "general", label: "General Settings", icon: <BsFilesAlt /> },
    { id: "font", label: "Font Settings", icon: <MdWindow /> },
    { id: "appearance", label: "Appearance Settings", icon: <MdWindow /> },
  ];

  return (
    <div className='w-full max-w-[330px] rounded-[32px] p-4 mx-auto bg-white'>
      <h1 className='mb-[35px] text-xl font-bold text-center'>Settings</h1>
      <div className='space-y-2'>
        {settingsOptions?.map((option) => (
          <div
            key={option?.id}
            className={`flex items-center w-[289px] mx-auto h-[55px] rounded-lg cursor-pointer ${
              selected === option?.label
                ? "bg-green-100 border-l-[5px] pl-1 border-[#1FA45B] text-[#1FA45B]"
                : "bg-[#F7F8FA] text-[#868686] pl-1"
            }`}
            onClick={() => setSelected(option?.label)}
          >
            <button
              className='w-8 h-8 md:w-10 text-xl md:h-10 flex items-center justify-center bg-[#E8F0F5] rounded-full hover:bg-green-100 focus:ring-2 focus:ring-green-500 transition-all'
              title={option.label}
            >
              {option?.icon}
            </button>
            <span className='text-sm font-medium'>{option.label}</span>
          </div>
        ))}
      </div>
      {selected === "Appearance Settings" && (
        <div className='mt-4 p-3 bg-gray-100 w-[270px] mx-auto rounded-lg'>
          <label className='flex items-center justify-between'>
            <span className='text-sm font-medium'>Night Mode</span>
            <div
              className={`relative w-10 h-6 flex items-center rounded-full cursor-pointer ${
                nightMode ? "bg-green-500" : "bg-gray-300"
              }`}
              onClick={() => setNightMode(!nightMode)}
            >
              <span
                className={`absolute w-4 h-4 bg-white rounded-full transition-transform ${
                  nightMode ? "translate-x-4" : "translate-x-0"
                }`}
              ></span>
            </div>
          </label>
        </div>
      )}
    </div>
  );
}
