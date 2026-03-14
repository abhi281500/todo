import React from 'react'


function TodoItem({ todo, updateTodo, deleteTodo, completeTodo }) {
  return (
    <li className="todo-item"> {/* CSS Class added */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo._id, todo.completed)}
        />
        <span style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none',
          opacity: todo.completed ? 0.6 : 1,
          fontSize: '16px',
          color: '#333',
          flex: 1
        }}>
          {todo.title}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button 
          onClick={() => {
            const newText = prompt("Enter new text:", todo.title);
            if (newText) updateTodo(todo._id, newText);
          }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px' }}
        >
          ✏️
        </button>
        
        <button 
          onClick={() => deleteTodo(todo._id)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px' }}
        >
          ❌
        </button>
      </div>
    </li>
  )
}

export default TodoItem