import React, { useState } from 'react'

export default function Header({onGoToLogin, onGoToCreateAccount, onGoSobre, onGoHome}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold"><a href="" onClick={onGoHome} >TaskManager</a></h1>
          <button
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="#" onClick={onGoSobre} className="hover:text-gray-300 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" onClick={onGoToLogin} className="hover:text-gray-300 transition-colors">
                  Entrar
                </a>
              </li>
              <li>
                <a href="#" onClick={onGoToCreateAccount} className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded transition-colors">
                  Criar Conta
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="#funcionalidades" className="block hover:text-gray-300 transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#sobre" className="block hover:text-gray-300 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#entrar" className="block hover:text-gray-300 transition-colors">
                  Entrar
                </a>
              </li>
              <li>
                <a href="#criar-conta" className="block bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded transition-colors">
                  Criar Conta
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}