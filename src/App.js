import logo from './logo.svg';
import './App.css';
import { TodoCounter } from './Components/TodoCounter.js';
import { TodoItem } from './Components/TodoItem.js';
import {TodoSearch} from './Components/TodoSearch.js';
import { TodoList } from "./Components/TodoList.js";
import { CreateTodoButton } from "./Components/CreateTodoButton.js";

const todos = [
  {text: '123', completed: true},
  {text: '456', completed: false},
  {text: '789', completed: false}
]

function App() {
  return (
    <div className="App">
      <div className='App-container'>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          {todos.map( todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed ={todo.completed}
              />
          ))}
          <TodoItem />
        </TodoList>

        <CreateTodoButton />
      </div>
    </div>
  );
}

export default App;
