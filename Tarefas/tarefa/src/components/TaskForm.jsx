import React, { useState, useEffect } from "react";

function TaskForm({ addTask, currentTask }) {
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
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Adicione uma tarefa"
      />
      <button type="submit">{currentTask ? "Atualizar" : "Adicionar"}</button>
    </form>
  );
}

export default TaskForm;
