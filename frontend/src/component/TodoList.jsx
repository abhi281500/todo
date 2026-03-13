import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos,updateTodo,completeTodo,deleteTodo }) {
  return (
    <div>
      <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} 
        todo={todo} 
        updateTodo ={updateTodo}
        deleteTodo ={deleteTodo}
        completeTodo ={completeTodo}
        />
      ))}
      </ul>



    </div>
  )
}

export default TodoList