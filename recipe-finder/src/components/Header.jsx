// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-400 to-green-500 backdrop-blur-md shadow-lg py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div  className="bg-cover bg-center h-10 w-10 flex items-center justify-center rounded-full overflow-hidden"
         //style={{ backgroundImage: `url(/images/man.jpg)` }}
          >

          <img
            src="/images/man.jpg"
            alt="RicePot Logo"
            className="h-10 w-10"
          />
        </div>
        <div className="text-2xl font-bold text-white"> RecipeFinder</div>
      </div>

      {/* Navigation */}
      <nav className="flex gap-6">
        <a
          href="#home"
          className="text-white hover:text-gray-100 transition duration-300 ease-in-out hover:scale-105"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-white hover:text-gray-100 transition duration-300 ease-in-out hover:scale-105"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-white hover:text-gray-100 transition duration-300 ease-in-out hover:scale-105"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
