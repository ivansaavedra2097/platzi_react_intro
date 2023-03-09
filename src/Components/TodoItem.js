import React from "react";
import '../styles/TodoItem.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

function TodoItem(props) {

    const onComplete = () => {
        alert(`Tarea: ${props.text} completada`);
    }

    return(
        // si props.complete != false se concatena 'Icon-check--active'
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                    onClick={onComplete}
            >
            <AiFillCheckCircle />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text} 
            </p>
            <span className='Icon Icon-delete' ><BsFillTrashFill /></span>
        </li>
    )
}

export { TodoItem };