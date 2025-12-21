import React, { useState } from "react";
import useThemeStore from "../store/themeStore";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);
  const darkMode = useThemeStore((state) => state.darkMode);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-400 to-green-500 backdrop-blur-md shadow-lg py-4 px-6 flex items-center justify-between">
      {/* Logo + App Name */}
      <div className="flex-1 flex items-center justify-center sm:justify-start gap-3">
        <div className="bg-cover bg-center h-10 w-10 flex items-center justify-center rounded-full overflow-hidden">
          <img src="/images/man.jpg" alt="RicePot Logo" className="h-10 w-10" />
        </div>
        <div className="text-2xl font-bold text-white">RecipeFinder</div>
      </div>

      {/* Desktop Links */}
      <nav className="hidden sm:flex gap-6 items-center">
        <a href="#home" className="text-white hover:text-gray-100 transition hover:scale-105">Home</a>
        <a href="#about" className="text-white hover:text-gray-100 transition hover:scale-105">About</a>
        <a href="#contact" className="text-white hover:text-gray-100 transition hover:scale-105">Contact</a>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-green-400 to-green-500 shadow-lg flex flex-col items-center py-4 sm:hidden">
          <a href="#home" className="text-white py-2 text-lg w-full text-center hover:bg-green-600 transition">Home</a>
          <a href="#about" className="text-white py-2 text-lg w-full text-center hover:bg-green-600 transition">About</a>
          <a href="#contact" className="text-white py-2 text-lg w-full text-center hover:bg-green-600 transition">Contact</a>
          <button
            onClick={toggleDarkMode}
            className="mt-2 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
