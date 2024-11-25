import React, { useEffect, useRef } from 'react'

const HeaderLogado = ({ toggleMenu, isMenuOpen, onLogout }) => {
  const menuRef = useRef(null)

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      toggleMenu(false)
    }
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="bg-sky-400 text-white p-4 flex justify-between items-center">
        <button onClick={() => toggleMenu(true)} className="text-2xl">
          ☰
        </button>
        <h1 className="text-xl text-white font-bold">Tarefas</h1>
        <div className="w-8"></div> {/* Espaço para balancear o layout */}
      </header>

      {/* Menu lateral */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="p-4">
          <button onClick={() => toggleMenu(false)} className="text-2xl mb-4">
            ×
          </button>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded">
                  Perfil
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded">
                  Configurações
                </a>
              </li>
              <li>
                <a href="#" onClick={onLogout} className="block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded">
                  Sair
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default HeaderLogado