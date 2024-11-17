import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = (task) => {
    if (currentTask) {
      // Atualizar uma tarefa existente
      setTasks((prev) =>
        prev.map((t) => (t.id === currentTask.id ? task : t))
      );
      setCurrentTask(null);
    } else {
      // Adicionar uma nova tarefa
      setTasks((prev) => [...prev, { ...task, id: Date.now() }]);
    }
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (task) => {
    setCurrentTask(task);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Gerenciador de Tarefas</h1>
      <TaskForm addTask={addTask} currentTask={currentTask} />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
