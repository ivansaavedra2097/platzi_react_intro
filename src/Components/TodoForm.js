import React, { useContext } from "react";
import '../styles/TodoForm.css';
import { TodoContext } from "../TodoContext/TodoContext";
import { useState } from "react";

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = useState('');

    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);

    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };


    return (
        <form onSubmit={onSubmit}>
            <label></label>
            <textarea cols="30" rows="10" placeholder="asdgfdg"
                value={newTodoValue}
                onChange={onChange}
                ></textarea>
            <div className="TodoForm-buttonContainer">
                <button
                className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}>
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit">
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };