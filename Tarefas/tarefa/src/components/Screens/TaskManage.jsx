import React, { useState } from "react";
import TaskForm from "../TaskForm";
import TaskList from "../TaskList";
import "../../../src/App.css";

const TaskManage = ({ handleAdd }) => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const addTask = (task) => {
    if (currentTask) {
      setTasks((prev) =>
        prev.map((t) => (t.id === currentTask.id ? task : t))
      );
      setCurrentTask(null);
    } else {
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

  const searchTask = (title) => {
    setSearchResults(
      tasks.filter((task) =>
        task.title.toLowerCase().includes(title.toLowerCase())
      )
    );
  };

  return (
    <div className="app">
      <h1>Gerenciador de Tarefas</h1>
      <TaskForm searchTask={searchTask} currentTask={currentTask} handleAdd={handleAdd} />
      <TaskList
        tasks={searchResults.length > 0 ? searchResults : tasks}
        toggleTask={toggleTask}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TaskManage;