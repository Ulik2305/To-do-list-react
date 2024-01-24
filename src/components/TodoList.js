import React from 'react';
import './TodoList.css';

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                    />
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;