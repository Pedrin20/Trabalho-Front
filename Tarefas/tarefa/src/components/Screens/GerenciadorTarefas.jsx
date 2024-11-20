import { useState } from 'react'

export default function GerenciadorTarefa({ onAdd }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Completar relatório', completed: false },
    { id: 2, title: 'Reunião com equipe', completed: true },
    { id: 3, title: 'Preparar apresentação', completed: false },
  ])

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  //from-cyan-400 to-light-blue-500
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const addTask = () => {
    // Implementação futura: redirecionar para a tela de adicionar tarefa
    console.log('Redirecionar para adicionar tarefa')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <button onClick={toggleMenu} className="text-2xl">
          ☰
        </button>
        <h1 className="text-xl text-white font-bold">Gerenciador de Tarefas</h1>
        <div className="w-8"></div> {/* Espaço para balancear o layout */}
      </header>

      {/* Menu lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
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
                <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded">
                  Sair
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="p-4">
        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Pesquisar tarefas..."
            className="w-full mr-2 p-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={onAdd}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Criar tarefa
          </button>
        </div>

        {/* Lista de tarefas */}
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="bg-white p-4 rounded shadow flex items-center justify-between"
            >
              <span className={task.completed ? 'line-through text-gray-500' : ''}>
                {task.title}
              </span>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => {
                  const updatedTasks = tasks.map((t) =>
                    t.id === task.id ? { ...t, completed: !t.completed } : t
                  )
                  setTasks(updatedTasks)
                }}
                className="h-5 w-5 text-indigo-600"
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}