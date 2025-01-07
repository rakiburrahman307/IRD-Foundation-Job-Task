import Image from "next/image";
import { FaUser, FaCog, FaRegBookmark } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { PiChatsTeardropLight } from "react-icons/pi";
import { TiLightbulb } from "react-icons/ti";
import { HiOutlineHome } from "react-icons/hi2";
import { TbBrandWindows } from "react-icons/tb";
import { RiMedicineBottleLine } from "react-icons/ri";
const SideMenu = () => {
  const menuItems = [
    { icon: <HiOutlineHome />, label: "Home" },
    { icon: <TbBrandWindows />, label: "Profile" },
    { icon: <RiMedicineBottleLine />, label: "Settings" },
    { icon: <TiLightbulb />, label: "Idea" },
    { icon: <FaRegBookmark />, label: "Bookmark" },
    { icon: <IoBookOutline />, label: "Book" },
    { icon: <PiChatsTeardropLight />, label: "chats" },
  ];

  return (
    <section className='flex -mt-12 flex-col justify-between items-center h-screen bg-white w-16 md:w-20 rounded-3xl'>
      {/* Top Logo Section */}
      <div className='flex items-center justify-center py-4'>
        <Image
          src='/logo.png'
          alt='Logo'
          width={73}
          height={73}
          className='rounded-full'
        />
      </div>

      {/* Menu Icons Section */}
      <div className='w-[38px] flex flex-col justify-center items-center space-y-2'>
        {menuItems.map((item, index) => (
          <button
            key={index}
            className='w-10 h-10 md:w-12 text-xl md:h-12 flex items-center justify-center bg-[#E8F0F5] rounded-full hover:bg-green-100 focus:ring-2 focus:ring-green-500 transition-all'
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Bottom Logo Section */}
      <div className='flex items-center justify-center py-4'>
        <Image
          src='/support.png'
          alt='Logo'
          width={57}
          height={56}
          className='rounded-full'
        />
      </div>
    </section>
  );
};

export default SideMenu;
