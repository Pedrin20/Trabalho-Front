import React, { useState, useEffect } from "react";

function TaskForm({ addTask, currentTask, handleAdd }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title, completed: false, id: currentTask?.id || null });
    setTitle("");
    handleAdd(); // Chame a função handleAdd aqui
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Adicione uma tarefa"
      />
    <button onClick={handleAdd}>Adicionar Tarefa</button>
    </form>
  );
}

export default TaskForm;