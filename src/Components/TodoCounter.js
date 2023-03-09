import React from "react";
import '../styles/TodoCounter.css';

// const styles = {
//     color: 'red',
//     backgroundColor: '#888'
// }

function TodoCounter() {
    return(
        // <h2 style={styles}>Has completado 2 de 3 tareas</h2>
        <h2 className='TodoCounter'>Has completado 2 de 3 tareas</h2>
    )
}

export { TodoCounter };