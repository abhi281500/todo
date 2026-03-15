import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import axios from "axios"

function TodoForm() {
  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])




  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get(
        "https://todo-vh4w.onrender.com/api/v1/todos"
      )
      setTodo(res.data)
    }

    fetchTodos()

  }, [])


  const addTodo = async () => {
    if (text.trim() === "") return

    const res = await axios.post(
      "https://todo-vh4w.onrender.com/api/v1/todos",
      { title: text }   //   Matlab backend request body me title expect karta hai.
    )


    setTodo([...todo, res.data])
    setText("")
  }

  const updateTodo = async (id, newText) => {

    const res = await axios.put(
      `https://todo-vh4w.onrender.com/api/v1/todos/${id}`,
      { title: newText }
    )

    setTodo(
      todo.map(t =>
        t._id === id ? res.data : t
      )
    )
  }


  const completeTodo = async (id, completed) => {

    const res = await axios.put(
      `https://todo-vh4w.onrender.com/api/v1/todos/${id}`,
      { completed: !completed }
    )

    setTodo(
      todo.map(t =>
        t._id === id ? res.data : t
      )
    )
  }



  const deleteTodo = async (id) => {
    await axios.delete(
      `https://todo-vh4w.onrender.com/api/v1/todos/${id}`
    )
    setTodo(todo.filter(t => t._id !== id))

  }
  return (
  <div className="todo-container"> {/* CSS Class added */}
    <h2 style={{ textAlign: 'center', color: '#333' }}>My Tasks 📝</h2>
    
    <div style={{ display: 'flex', marginBottom: '10px' }}>
      <input
        className="todo-input" // CSS Class added
        value={text}
        placeholder='Add new todo'
        onChange={(e) => setText(e.target.value)} 
      />

      <button
        className="add-btn" // CSS Class added
        disabled={!text.trim()}
        onClick={addTodo}
      >
        Add
      </button>
    </div>

    <TodoList 
      todos={todo}
      updateTodo={updateTodo}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  </div>
)
}

export default TodoForm