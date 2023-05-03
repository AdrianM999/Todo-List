import './App.css';
import { useState, useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoItem from './TodoItem';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue == null) return [];

    return JSON.parse(localValue); 
  });

  useEffect(() => {
    localStorage.getItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  const addTodo = (title) => {
    setTodos(currentTodos => {
      return [...currentTodos,
              {id: crypto.randomUUID(), title, completed: false}]
    })
}

const toggleTodo = (id, completed) => {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed}
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
    <h1>Todo List</h1>
      <NewTodoForm addTodo={addTodo}/>
      
      
      <TodoList 
      todos={todos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}/>
    </>
  );
}

export default App;
