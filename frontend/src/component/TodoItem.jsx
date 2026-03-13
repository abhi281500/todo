import React from 'react'

function TodoItem({ todo, updateTodo, deleteTodo, completeTodo }) {
  return (

    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>
        ❌ 
        </button>

      <button onClick={() => {
        const newText = prompt("Enter new text:", todo.text);
        if (newText) updateTodo(todo.id, newText);
      }}>
       ✏ 
      </button>

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => completeTodo(todo.id)}
      />

    </li>


  )
}

export default TodoItem