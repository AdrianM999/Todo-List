import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useEffect([]);

  const addTodo = (title) => {
    setTodos(currentTodos => {
      return [...currentTodos,
              {id: crypto.randomUUID, title, completed: false}]
    })
  }
  
  const toogleTodo = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return [...todo, completed]
        }

        return todo;
      })
    })
  }

  const deleteTodo = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => {
        return todo.id !== id 
      })
    })
  }

  return (
    <>

    </>
  );
}

export default App;
