import './App.css';
import React from 'react';
import { TodoContext } from './TodoContext/TodoContext.js';
import { TodoCounter } from './Components/TodoCounter.js';
import { TodoItem } from './Components/TodoItem.js';
import { TodoSearch } from './Components/TodoSearch.js';
import { TodoList } from "./Components/TodoList.js";
import { CreateTodoButton } from "./Components/CreateTodoButton.js";
import { TodoProvider  } from './TodoContext/TodoContext.js';



function App() {


  return (
    <TodoProvider>
    <div className="App">
      <div className='App-container'>
        <TodoCounter />
        <TodoSearch />

        <TodoContext.Consumer>
          {({ 
            error,
            loading,
            searchedTodos,
            completeTodo,
            deleteTodo 
          }) => (
            <TodoList>
              {error && <p>hubo un error</p>}
              {loading && <p>Cargando...</p>}
              {(!loading && !searchedTodos.length) && <p>Crea una Tarea</p>}

              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}

            </TodoList>
          )

          }
        </TodoContext.Consumer>

        <CreateTodoButton />
      </div>
    </div>
    </TodoProvider>
  );
}

export default App;
