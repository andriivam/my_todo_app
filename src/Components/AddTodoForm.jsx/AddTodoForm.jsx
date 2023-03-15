import React, { useState } from 'react';
import './AddTodoForm.css';

export default function AddTodoForm({ addTodo }) {
    const [inputValue, setInputValue] = useState('');
    const handleUserInput = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(inputValue);
        setInputValue('');
    }

    return (
        <form className="item-add-form d-flex" onSubmit={onSubmit}>
            <input type="text" className="form-control" placeholder="Add new todo" value={inputValue} onChange={handleUserInput} />
            <button type="submit" name=" Add Todo" className="btn btn-outline-secondary text-nowrap" >
                New Todo
            </button>
        </form>
    )
}


