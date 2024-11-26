import { useState, useEffect, useRef } from 'react'
import { Menu, X, Plus, Search, User, LogOut, Settings, CheckSquare } from 'lucide-react'

export default function GerenciadorTarefa({ onAdd, onGoToLogin, onLogout, onGoToConfiguracoes, onGoToPerfil }) {  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [tasks, setTasks] = useState([
    { id: 1, prioridade: "Fácil" , title: 'Completar relatório', completed: false, dataConclusao: '11/02/2025' },
    { id: 2, prioridade: "Médio" , title: 'Reunião com equipe', completed: true, dataConclusao: '01/01/2022' },
    { id: 3, prioridade: "Difícil" , title: 'Preparar apresentação', completed: false, dataConclusao: '09/11/2024' },
    { id: 4, prioridade: "Difícil" , title: 'Preparar apresentação para o dia tal do dia tal', completed: false, dataConclusao: '05/01/2024' },
  ])

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

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-sky-600 text-white p-4 flex justify-between items-center shadow-md">
        <button onClick={toggleMenu} className="text-2xl hover:bg-sky-700 p-2 rounded-full transition-colors duration-200">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold">Gerenciador de Tarefas</h1>
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
              <a href="#" className="flex items-center space-x-3 py-2 px-4 text-gray-700 hover:bg-sky-100 rounded transition-colors duration-200">
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

      {/* Conteúdo principal */}
      <main className="p-6">
        <div className="mb-6 flex justify-between items-center">
          <div className="relative flex-grow mr-4">
            <input
              type="text"
              placeholder="Pesquisar tarefas..."
              className="w-full p-2 pl-10 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <button
            onClick={onAdd}
            className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors duration-200 flex items-center space-x-2">
            <Plus size={20} />
            <span>Criar tarefa</span>
          </button>
        </div>

        {/* Cabeçalho da lista de tarefas */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <div className="grid grid-cols-4 gap-4 font-bold text-gray-700">
            <div>Tarefas</div>
            <div className="text-center">Prioridade</div>
            <div className="text-center">Data de conclusão</div>
            <div className="text-center">Ações</div>
          </div>
        </div>

        {/* Lista de tarefas */}
        <ul className="space-y-4">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
            >
              <div className="grid grid-cols-4 gap-4 w-full items-center">
                <span className={`truncate ${task.completed ? 'line-through text-gray-500' : ''}`}>
                  {task.title}
                </span>
                <span className={`text-center ${task.completed ? 'line-through text-gray-500' : ''}`}>
                  {task.prioridade}
                </span>
                <span className={`text-center ${task.completed ? 'line-through text-gray-500' : ''}`}>
                  {task.dataConclusao}
                </span>
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={() => {
                      const updatedTasks = tasks.filter((t) => t.id !== task.id)
                      setTasks(updatedTasks)
                    }}
                    className="text-red-600 hover:text-red-800 bg-red-100 px-3 py-1 rounded-full text-sm transition-colors duration-200"
                  >
                    Excluir
                  </button>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => {
                      const updatedTasks = tasks.map((t) =>
                        t.id === task.id ? { ...t, completed: !t.completed } : t
                      )
                      setTasks(updatedTasks)
                    }}
                    className="h-5 w-5 text-emerald-600 rounded focus:ring-emerald-500 cursor-pointer"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

