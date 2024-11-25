import React, { useState, useRef, useEffect } from 'react'

export default function FormularioTarefa({ onVoltarLista, onLogout }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    creationDate: new Date().toISOString().split('T')[0], // Define a data atual como valor padrão
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
    <>
      {/* Header */}
      <header className="bg-sky-400 text-white p-4 flex justify-between items-center">
        <button onClick={toggleMenu} className="text-2xl">
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
          <button onClick={toggleMenu} className="text-2xl mb-4">
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

      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full px-4 sm:px-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <button onClick={onVoltarLista} className="absolute top-4 left-4 text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </button>
            <div className="max-w-md mx-auto">
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-gray-900">Nova Tarefa</h1>
              </div>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={task.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="creationDate" className="block text-sm font-medium text-gray-700">Data de Criação</label>
                  <input
                    type="date"
                    name="creationDate"
                    id="creationDate"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={task.completionDate}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Prioridade</label>
                  <select
                    name="priority"
                    id="priority"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
                    className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Salvar Tarefa
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}