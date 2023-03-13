import React from "react";
import { createContext, useState} from "react";
import { useLocalStorage } from './useLocalStorage.js';

//compartir estados
const TodoContext = createContext()

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V2', []);
      const [searchValue, setSearchValue] = useState('');
      const [openModal, setOpenModal] = useState(false);

      // const completedTodos = todos.filter(todo => todo.completed === true);
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      //buscando todos
      let searchedTodos = [];
      
    
      if (!searchValue.length > 0) {
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
    
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false
        })
        saveTodos(newTodos);
      };

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

// contiene { provider, consumer }
//<TodoContext.Provider> Lo que heredaremos </ TodoContext.Provider >
//<TodoContext.Consumer> Lo que heredamos </ TodoContext.Consumer >

export { TodoContext, TodoProvider};