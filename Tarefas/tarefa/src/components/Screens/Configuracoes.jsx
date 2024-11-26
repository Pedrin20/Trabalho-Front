import React, { useState, useRef, useEffect } from 'react'
import { Menu, X, User, LogOut, Settings, Home, Bell, Moon, Sun, Globe, Save, CheckSquare } from 'lucide-react'

export default function Configuracoes({ onVoltarLista, onLogout, onGoToConfiguracoes, onGoToTarefas, onGoToPerfil }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [config, setConfig] = useState({
    notifications: true,
    darkMode: false,
    language: 'pt'
  })
  const menuRef = useRef(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false)
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setConfig(prevConfig => ({
      ...prevConfig,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Configurações salvas:', config)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-sky-600 text-white p-4 flex justify-between items-center shadow-md">
        <button onClick={toggleMenu} className="text-2xl hover:bg-sky-700 p-2 rounded-full transition-colors duration-200">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold">Configurações</h1>
        <button className="hover:bg-sky-700 p-2 rounded-full transition-colors duration-200">
          <User size={24} />
        </button>
      </header>

      {/* Menu lateral */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="p-4 bg-sky-600 text-white">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={toggleMenu} className="text-2xl hover:bg-sky-700 p-2 rounded-full transition-colors duration-200">
              <X size={24} />
            </button>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <User size={24} className="text-sky-600" />
            </div>
            <div>
            <p className="font-semibold">Pedro</p>
            <p className="text-sm opacity-75">pedroxd@gmail.com</p> 
            </div>
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" onClick={onGoToTarefas} className="flex items-center space-x-3 py-2 px-4 text-gray-700 hover:bg-sky-100 rounded transition-colors duration-200">
              <CheckSquare size={20} />

                <span>Tarefas</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={onGoToPerfil} className="flex items-center space-x-3 py-2 px-4 text-gray-700 hover:bg-sky-100 rounded transition-colors duration-200">
                <User size={20} />
                <span>Perfil</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={onGoToConfiguracoes} className="flex items-center space-x-3 py-2 px-4 bg-sky-100 text-sky-600 rounded transition-colors duration-200">
                <Settings size={20} />
                <span>Configurações</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={onLogout} className="flex items-center space-x-3 py-2 px-4 text-gray-700 hover:bg-sky-100 rounded transition-colors duration-200">
                <LogOut size={20} />
                <span>Sair</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Conteúdo principal */}
      <div className='p-10'></div>
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative bg-white shadow-lg sm:rounded-3xl p-8">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Configurações</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="flex items-center justify-between">
                    <label htmlFor="notifications" className="flex items-center space-x-3 text-sm font-medium text-gray-700">
                      <Bell size={20} />
                      <span>Notificações</span>
                    </label>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="notifications"
                        id="notifications"
                        className="sr-only peer"
                        checked={config.notifications}
                        onChange={handleChange}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="darkMode" className="flex items-center space-x-3 text-sm font-medium text-gray-700">
                      {config.darkMode ? <Moon size={20} /> : <Sun size={20} />}
                      <span>Modo Escuro</span>
                    </label>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="darkMode"
                        id="darkMode"
                        className="sr-only peer"
                        checked={config.darkMode}
                        onChange={handleChange}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="language" className="flex items-center space-x-3 text-sm font-medium text-gray-700 mb-2">
                      <Globe size={20} />
                      <span>Idioma</span>
                    </label>
                    <select
                      name="language"
                      id="language"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                      value={config.language}
                      onChange={handleChange}
                    >
                      <option value="pt">Português</option>
                      <option value="en">English</option>
                      <option value="es">Español</option>
                    </select>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-200"
                    >
                      <Save size={20} className="mr-2" />
                      Salvar Configurações
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

