import React from 'react'
import { useState } from "react"

function TodoList() {
    const [ todo, setTodo] = useState('');
    const [ todoList, setTodoList] = useState([]);

    const addTodo = () => {
    if(todo.trim() === '') return;
    setTodoList([...todoList, {id:Date.now(), text:todo, completed: false}])
    setTodo('');
    }

  return (
    <div>
    <div className = "container">
       <input type = "text"
       placeholder ="Add a Task.."
       value = {todo}
       onChange={(e) => setTodo(e.target.value)} />
       <button className = 'add-button' onClick={addTodo}>Add</button>
    </div> 
    <ul className = "to-do list">
     {todoList.map((item) => (
        <li key = {item.id}  onClick={() => toggleComplete(item.id)}>{item.text}</li>
    
     ))}

    </ul>
    </div>
  )
}

export default TodoList