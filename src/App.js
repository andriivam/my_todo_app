import React, { useState } from 'react';
import TodoList from './Components/TodoList/TodoList';
import AppHeader from './Components/AppHeader/AppHeader';
import SearchPanel from './Components/SearchPanel/SearchPanel';
import ItemStatusFilter from './Components/ItemStatusFilter/ItemStatusFilter';
import AddTodoForm from './Components/AddTodoForm.jsx/AddTodoForm';
import { v4 as uuidv4 } from "uuid";
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const doneCount = todos.filter((todo) => todo.done === true).length;
  const todoCount = todos.length - doneCount;


  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodo = {
      label: text,
      important: false,
      done: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo]);
  };

  const onToggleImportant = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, important: !todo.important };
      }
      return todo;
    }));
  };

  const onToggleDone = (id) => {
    const newTodo = [...todos];
    const todo = newTodo.find(todo => todo.id === id);
    todo.done = !todo.done;
    setTodos(newTodo)
  }

  const handleSearch = (inputValue) => {
    setSearch(inputValue);
  };

  const searchTodos = search
    ? todos.filter((todo) =>
      todo.label.toLowerCase().includes(search.toLowerCase())
    )
    : todos.length > 0 ? todos : [];

  const filterTodos = (filter) => {
    if (filter === 'all') {
      return todos;
    } else if (filter === 'active') {
      return todos.filter(todo => !todo.done);
    } else if (filter === 'done') {
      return todos.filter(todo => todo.done);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = filterTodos(filter);


  return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="top-panel d-flex justify-content-between">
        <SearchPanel search={search} handleSearch={handleSearch} />
        <ItemStatusFilter filter={filter} onFilterChange={handleFilterChange} />
      </div>
      <TodoList
        onDeleted={deleteTodo}
        filteredTodos={filteredTodos}
        searchTodos={searchTodos}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
      />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
