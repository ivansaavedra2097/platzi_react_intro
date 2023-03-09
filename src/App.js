import './App.css';
import { TodoCounter } from './Components/TodoCounter.js';
import { TodoItem } from './Components/TodoItem.js';
import { TodoSearch } from './Components/TodoSearch.js';
import { TodoList } from "./Components/TodoList.js";
import { CreateTodoButton } from "./Components/CreateTodoButton.js";
import { useState } from 'react';

const testTodos = [
  { text: '123', completed: true },
  { text: '456', completed: false },
  { text: '789', completed: false },
  { text: 'nueva nota', completed: true }
];

function App() {

  const [todos, setTodos] = useState(testTodos);
  const [searchValue, setSearchValue] = useState('');

  // const completedTodos = todos.filter(todo => todo.completed === true);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  //buscando todos
  let searchedTodos = [];

  if(!searchValue.length > 0 ){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;

    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  };


  return (
    <div className="App">
      <div className='App-container'>
        <TodoCounter
          total={totalTodos}
          completed={completedTodos} />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>

          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete = {() => completeTodo(todo.text)}
              onDelete = {() => deleteTodo(todo.text)}
            />
          ))}

        </TodoList>

        <CreateTodoButton />
      </div>
    </div>
  );
}

export default App;
