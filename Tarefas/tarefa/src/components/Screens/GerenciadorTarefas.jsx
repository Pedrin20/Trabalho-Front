import { useState, useEffect, useRef } from 'react'


export default function GerenciadorTarefa({ onAdd, onGoToLogin }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [tasks, setTasks] = useState([
    { id: 1, prioridade: "Fácil" , title: 'Completar relatório', completed: false, dataConclusao: '11/02/2025' },
    { id: 2, prioridade: "Médio" , title: 'Reunião com equipe', completed: true, dataConclusao: '01/01/2022' },
    { id: 3, prioridade: "Difícil" , title: 'Preparar apresentação', completed: false, dataConclusao: '09/11/2024' },
    { id: 4, prioridade: "Difícil" , title: 'Preparar apresentação para o dia tal do dia tal', completed: false, dataConclusao: '05/01/2024' },
  ])
 {/* Necessario para a header */}
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


 {/* x */}

  const onLogout = () => {
    // Implementação futura: redirecionar para a tela de login
    console.log('Redirecionar para a tela de login')
    onGoToLogin()
  }
  

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  )




  

  const addTask = () => {
    // Implementação futura: redirecionar para a tela de adicionar tarefa
    console.log('Redirecionar para adicionar tarefa')
  }
const titleTarefa = 'Gerenciador de tarefas'
  

  return (
    
    <div className="min-h-screen bg-gray-100">
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
                  Tarefas
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
            className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-900">
            Criar tarefa
          </button>
        </div>

        {/* Descritivo */}
<div className="relative">
  <ul className="space-y-2 font-bold">
    <li className='bg-white p-4 rounded shadow flex items-center justify-between'>
      <div className="flex items-center space-x-4 w-full">
        <span className='' style={{ flex: '1 1 0', maxWidth: '200px', textAlign: "center" }}>
          Tarefas
        </span>
        <span className='' style={{ textAlign: "center", flex: '1 1 0', maxWidth: '200px' }}>
          Prioridade
        </span>
        <span className='' style={{ textAlign: "center", flex: '1 1 0', maxWidth: '200px' }}>
          Data de conclusão
        </span>
      </div>
      <div className='flex items-center space-x-4'>
        <span className='' style={{ flex: '1 1 0', maxWidth: '200px', textAlign: "center" }}>
          Ações
        </span>
      </div>
    </li>
  </ul>
  <div style={{ width: '0%', borderBottom: '1px solid gray', margin: '0 auto', position: 'absolute', bottom: 0, left: '7.5%' }}></div>
</div>

        {/* Lista de tarefas */}
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="bg-white p-4 rounded shadow flex items-center justify-between"
            >
              <div className="flex items-center space-x-4 w-full">
                <span className={`truncate ${task.completed ? 'line-through text-gray-500' : ''}`} style={{ flex: '1 1 0', maxWidth: '200px' }}>
                  {task.title}
                </span>
                <span className={`flex-none ${task.completed ? 'line-through text-gray-500' : ''}`} style={{ width: '200px', textAlign: 'center' }}>
                  {task.prioridade}
                </span>
                <span className={`flex-none ${task.completed ? 'line-through text-gray-500' : ''}`} style={{ width: '200px', textAlign: 'center' }}>
                  {task.dataConclusao}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    const updatedTasks = tasks.filter((t) => t.id !== task.id)
                    setTasks(updatedTasks)
                  }}
                  className="text-red-600 hover:text-red-800 bg-red-100 px-2 py-0.9 rounded"
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
                  className="h-5 w-5 text-indigo-600 custom-checkbox border-gray-300 rounded focus:ring-emerald-500"
                />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}