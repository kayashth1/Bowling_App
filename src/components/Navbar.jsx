import React, { useState } from 'react';
import { RiSettingsLine, RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="navbar flex justify-between md:items-center w-full h-[80px] text-white px-4 md:px-10 pt-4 md:pt-2">
      {/* Left Section: Logo */}
      <div className="left items-center  md:w-1/4 md:h-full">
        <div className="logo">
          <img src="/logo.png" alt="logo" className="w-[70%]" />
        </div>
      </div>

      {/* Middle Section: Links - Visible on larger screens */}
      <div className="w-3/4 hidden md:flex">
        <div className="mid flex w-full">
          <ul className="flex w-full justify-center gap-16 items-center">
            {['Home', 'News', 'About Us', 'Packages'].map((item) => (
              <li
                key={item}
                className="relative group hover:text-[#0596AA] cursor-pointer p-1.5"
              >
                {item}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0596AA] scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="right w-1/4 flex justify-end items-center pr-10">
          <div className="setting-icon text-4xl cursor-pointer">
            <RiSettingsLine />
          </div>
        </div>
      </div>

      {/* Hamburger Menu Icon - Visible on smaller screens */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-4xl">
          {menuOpen ? <RiCloseLine /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-gray-800 text-white flex flex-col items-center md:hidden">
          {['Home', 'News', 'About Us', 'Packages'].map((item) => (
            <div
              key={item}
              className="w-full text-center py-2 border-b border-gray-700 hover:bg-gray-700"
            >
              {item}
            </div>
          ))}
          <div className="w-full text-center py-2 hover:bg-gray-700">
            <RiSettingsLine className="text-4xl mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
