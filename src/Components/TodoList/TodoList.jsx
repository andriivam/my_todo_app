import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

export default function TodoList({ filteredTodos, searchTodos, onDeleted, onToggleImportant, onToggleDone }) {
    const filteredSearchTodos = searchTodos.filter((todo) => filteredTodos.includes(todo));

    const elements = filteredSearchTodos.map((item) => {
        const { id, ...itemsProps } = item;
        return (
            <li key={id} className="list-group-item ">
                <TodoListItem
                    {...itemsProps}
                    onDeleted={() => { onDeleted(id) }}
                    onToggleImportant={() => { onToggleImportant(id) }}
                    onToggleDone={() => { onToggleDone(id) }}
                />
            </li>
        )
    })
    return (
        <div>
            <ul className="list-group todo-list">
                {elements}
            </ul>
        </div>
    )
}
