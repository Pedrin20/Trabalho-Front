import React from "react";

function TaskList({ tasks, toggleTask, editTask, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          <span onClick={() => toggleTask(task.id)}>{task.title}</span>
          <div className="actions">
            <button onClick={() => editTask(task)}>Editar</button>
            <button onClick={() => deleteTask(task.id)}>Excluir</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
