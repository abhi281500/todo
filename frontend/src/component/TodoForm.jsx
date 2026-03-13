import React, { useState } from 'react'
import TodoList from './TodoList'

function TodoForm() {
  const [text , setText] =useState("")
  const [todo , setTodo] =useState([])


 const addTodo = () =>{
  if(text.trim() === "") return

  const newTodo = {
 id: Date.now(),
 text: text,
 completed: false
}
    setTodo([...todo,newTodo])
    setText("")  
  }

 const updateTodo =(id,newText) =>{
  setTodo(
  todo.map(t =>
    t.id === id
      ? {...t, text: newText}
      : t
  )
)
 }
 const completeTodo = (id) => {
    setTodo(
  todo.map(t =>
    t.id === id
      ? {...t, completed: !t.completed}
      : t
  )
)
 }
 const deleteTodo = (id) => {
  setTodo(todo.filter(t =>t.id !==id))

 }
  return (
    <div>
      <input
      value={text}
      placeholder='Add new todo'
      onChange={(e) => setText(e.target.value)}/>

     <button onClick={addTodo}>Add todo</button>
      <TodoList todos={todo}
        updateTodo = {updateTodo}
        completeTodo = {completeTodo}
        deleteTodo ={deleteTodo}
      />
      </div>
  )
}

export default TodoForm