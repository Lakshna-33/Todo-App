import React from 'react'
import { useState } from "react"
import TodoItem from "./TodoItem";

function TodoList() {
    const [ todo, setTodo] = useState('');
    const [ todoList, setTodoList] = useState([]);

    const addTodo = () => {
    if(todo.trim() === '') return;
    setTodoList([...todoList, {id:Date.now(), text:todo, completed: false}])
    setTodo('');
    }

    const toggleComplete = (id) => {
        setTodoList(
        todoList.map((item) =>
          item.id === id? {...item, completed: !item.completed}: item
    )
    )
    }

    const deleteTodo = (id) =>{
        setTodoList(
            todoList.filter((item)=> item.id !== id)
        )  
    }



  return (
    <div>
    <div className = "container">
       <input type = "text"
       placeholder ="Add a Task.."
       value = {todo}
       onChange={(e) => setTodo(e.target.value)} />
       <button className = 'add-button' 
       onClick={addTodo}>
        Add</button>

    </div> 
    <ul className = "to-do list">
     {todoList.map((item) => (
        <li
        key = {item.id}  
        onClick={() => (item.id)}
        style={{
            cursor:'pointer',
            textDecoration: item.completed? 'line-through': 'none',
            color: item.completed? 'black':'black',
        }}
        >
          <span>{item.text}</span>
          <button
            className="delete-btn"
            onClick={(e)=>{
              e.stopPropagation();
              deleteTodo(item.id);
           }
           }       
         >
            Delete
          </button>
          </li>
     ))}
    </ul>
    </div>
  )
}

export default TodoList