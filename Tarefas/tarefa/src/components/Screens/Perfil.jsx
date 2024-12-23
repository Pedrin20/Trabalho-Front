import React, { useState, useRef, useEffect } from 'react'
import { Menu, X, User, LogOut, Settings, Home, Mail, Phone, Calendar, Camera, Save, CheckSquare } from 'lucide-react'

export default function Perfil({ onVoltarLista, onLogout, onGoToConfiguracoes, onGoToPerfil, onGoToTarefas }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Pedro',
    email: 'pedroxd@gmail.com',
    phone: '+55 82 4402 8922',
    birthdate: '2003-27-08'
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
    const { name, value } = e.target
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Perfil atualizado:', profile)
  }

  return (
    <>

    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-sky-600 text-white p-4 flex justify-between items-center shadow-md">
        <button onClick={toggleMenu} className="text-2xl hover:bg-sky-700 p-2 rounded-full transition-colors duration-200">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold">Perfil</h1>
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
              <p className="font-semibold">{profile.name}</p>
              <p className="text-sm opacity-75">{profile.email}</p>
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
              <a href="#" onClick={onGoToPerfil} className="flex items-center space-x-3 py-2 px-4 bg-sky-100 text-sky-600 rounded transition-colors duration-200">
                <User size={20} />
                <span>Perfil</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={onGoToConfiguracoes} className="flex items-center space-x-3 py-2 px-4 text-gray-700 hover:bg-sky-100 rounded transition-colors duration-200">
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
      <div className='p-5'></div>
      {/* Conteúdo principal */}
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative bg-white shadow-lg sm:rounded-3xl p-8">
              <div className="max-w-md mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                      <User size={64} className="text-gray-400" />
                    </div>
                    <button className="absolute bottom-0 right-0 bg-sky-600 text-white p-2 rounded-full hover:bg-sky-700 transition-colors duration-200">
                      <Camera size={20} />
                    </button>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Seu Perfil</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="flex items-center space-x-3 text-sm font-medium text-gray-700 mb-2">
                      <User size={20} />
                      <span>Nome Completo</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                      value={profile.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="flex items-center space-x-3 text-sm font-medium text-gray-700 mb-2">
                      <Mail size={20} />
                      <span>Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                      value={profile.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="flex items-center space-x-3 text-sm font-medium text-gray-700 mb-2">
                      <Phone size={20} />
                      <span>Telefone</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                      value={profile.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="birthdate" className="flex items-center space-x-3 text-sm font-medium text-gray-700 mb-2">
                      <Calendar size={20} />
                      <span>Data de Nascimento</span>
                    </label>
                    <input
                      type="date"
                      name="birthdate"
                      id="birthdate"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                      value={profile.birthdate}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-200"
                    >
                      <Save size={20} className="mr-2" />
                      Salvar Alterações
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

