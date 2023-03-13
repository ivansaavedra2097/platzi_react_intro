import './App.css';
import React from 'react';
import { TodoContext } from './TodoContext/TodoContext';
import { TodoCounter } from './Components/TodoCounter.js';
import { TodoItem } from './Components/TodoItem.js';
import { TodoSearch } from './Components/TodoSearch.js';
import { TodoList } from "./Components/TodoList.js";
import { CreateTodoButton } from "./Components/CreateTodoButton.js";
import { useContext } from 'react';
import { Modal } from './modal/modal.js';
import { TodoForm } from './Components/TodoForm.js';

function App() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext);


  return (

    <div className="App">
      <div className='App-container'>
        <TodoCounter />
        <TodoSearch />

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

        {
          !!openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )
        }

        <CreateTodoButton 
          setOpenModal={setOpenModal}
        />
      </div>
    </div>

  );
}

export default App;
