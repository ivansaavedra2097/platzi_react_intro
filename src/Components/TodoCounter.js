import React from "react";
import '../styles/TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';
// const styles = {
//     color: 'red',
//     backgroundColor: '#888'
// }

function TodoCounter() {
const {totalTodos,completedTodos} = React.useContext(TodoContext);

    return(
        // <h2 style={styles}>Has completado 2 de 3 tareas</h2>
        <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} tareas</h2>
    )
}

export { TodoCounter };