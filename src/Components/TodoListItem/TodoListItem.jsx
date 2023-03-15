import React from 'react';
import './TodoListItem.css';

export default function TodoListItem({ label, onDeleted, onToggleImportant, onToggleDone, important, done }) {

    let className = 'todo-list-item';
    if (done) {
        className += ' done';
    };

    if (important) {
        className += ' important';
    };

    return (
        <span className={className}>
            <span
                className="todo-list-item-label"
                onClick={onToggleDone}>
                {label}
            </span>
            <button type="button"
                className="btn btn-outline-success btn-sm float-end"
                onClick={onToggleImportant}
                aria-label="Make important todo item">
                <i className="fa fa-exclamation" />
            </button>
            <button type="button"
                className="btn btn-outline-danger btn-sm float-end"
                aria-label="Delete todo item">
                <i className="fa fa-trash-o"
                    onClick={onDeleted} />
            </button>
        </span>


    )
}
