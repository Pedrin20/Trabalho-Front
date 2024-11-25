import React, { useState, useRef, useEffect } from 'react'
import { Menu, X, User, LogOut, Settings, Home, ArrowLeft, Save } from 'lucide-react'

export default function FormularioTarefa({ onVoltarLista, onLogout }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    creationDate: new Date().toISOString().split('T')[0],
    completionDate: '',
    priority: 'medium'
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
    setTask(prevTask => ({
      ...prevTask,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Task submitted:', task)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-sky-600 text-white p-4 flex justify-between items-center shadow-md  ">
        <button onClick={toggleMenu} className="text-2xl hover:bg-sky-700 p-2 rounded-full transition-colors duration-200">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold">Nova Tarefa</h1>
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
              <p className="font-semibold">John Doe</p>
              <p className="text-sm opacity-75">john@example.com</p>
            </div>
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-3 py-2 px-4 text-gray-700 hover:bg-sky-100 rounded transition-colors duration-200">
                <Home size={20} />
                <span>Início</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 py-2 px-4 text-gray-700 hover:bg-sky-100 rounded transition-colors duration-200">
                <User size={20} />
                <span>Perfil</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 py-2 px-4 text-gray-700 hover:bg-sky-100 rounded transition-colors duration-200">
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
<div className='p-10'></div>
      {/* Form content */}
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative bg-white shadow-lg sm:rounded-3xl p-8">
              <button 
                onClick={onVoltarLista} 
                className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 flex items-center space-x-1"
              >
                <ArrowLeft size={20} />
                <span>Voltar</span>
              </button>
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Nova Tarefa</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                      value={task.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descrição</label>
                    <textarea
                      name="description"
                      id="description"
                      rows="3"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                      value={task.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="creationDate" className="block text-sm font-medium text-gray-700">Data de Criação</label>
                      <input
                        type="date"
                        name="creationDate"
                        id="creationDate"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                        value={task.creationDate}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="completionDate" className="block text-sm font-medium text-gray-700">Data de Conclusão</label>
                      <input
                        type="date"
                        name="completionDate"
                        id="completionDate"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                        value={task.completionDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Prioridade</label>
                    <select
                      name="priority"
                      id="priority"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                      value={task.priority}
                      onChange={handleChange}
                    >
                      <option value="low">Baixa</option>
                      <option value="medium">Média</option>
                      <option value="high">Alta</option>
                    </select>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-200"
                    >
                      <Save size={20} className="mr-2" />
                      Salvar Tarefa
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

