import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-2 sm:mb-0">
            <h2 className="text-xl font-bold">TaskManager</h2>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Início</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Sobre</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Contato</a>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} TaskManager</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

