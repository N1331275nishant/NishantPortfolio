import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white shadow z-50 flex items-center justify-center">
      <nav className="flex gap-6 text-gray-700 font-medium">
        <a href="#home" className="hover:text-indigo-600 transition">Home</a>
        <a href="#about" className="hover:text-indigo-600 transition">About</a>
        <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
        <a href="#experience" className="hover:text-indigo-600 transition">Experience</a>
        <a href="#skills" className="hover:text-indigo-600 transition">Skills</a>
        <a href="#education" className="hover:text-indigo-600 transition">Education</a>
        <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
