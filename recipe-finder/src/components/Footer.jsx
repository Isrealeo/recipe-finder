const Footer = () => {
  return (
    <footer className="w-full bg-green-500 text-white py-4 text-center mt-10 dark:bg-gray-900">
      &copy; {new Date().getFullYear()} RecipeFinder. All rights reserved.
    </footer>
  );
};

export default Footer;
