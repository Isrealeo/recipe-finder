const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-600 cursor-pointer">
        🍲 Recipefinder
      </div>

      {/* Optional right-side navigation */}
      <nav className="flex gap-4">
        <a href="#home" className="text-gray-700 hover:text-green-600 transition">
          Home
        </a>
        <a href="#about" className="text-gray-700 hover:text-green-600 transition">
          About
        </a>
      </nav>
    </header>
  );
};

export default Header;
